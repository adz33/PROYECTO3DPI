import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {KeyboardControls, OrbitControls, Html, Text,useGLTF} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lights from './Lights/Lighs.jsx';
import Environment from './Environment/Environment.jsx';
import InGameNavBar from './Navbar/Navbar.jsx';
import MovementGuide from './Text/movementGuide.jsx';
import GameGuide from './Text/GameGuide.jsx';
import Cientific from './Characters/Cientific.jsx';
import MaleCharacter from './Characters/maleCharacter.jsx';
import useMovements from './utils/key-movements.js';
import './level0.css';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import CharacterController from './CharacterController/CharacterController.jsx';
import { AvatarProvider } from '../../../context/AvatarContext.jsx';
import MapLvL1 from './world/MapLvL1.jsx';
import Views from './View/View.jsx';
import ambientSong from '../../../../public/sounds/ambientSong.wav';

function Model({ path, position, onClick }) {
    const { scene } = useGLTF(path);
    if (!scene) return null;
    return (
        <primitive 
            object={scene} 
            scale={15} 
            position={position} 
            onClick={onClick} 
            onPointerOver={(e) => (e.stopPropagation(), (e.target.style.cursor = 'pointer'))}
            onPointerOut={(e) => (e.stopPropagation(), (e.target.style.cursor = 'default'))}
        />
    );
}

const Level1 = () => {
    const map = useMovements();
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedCharacter } = location.state || {};
    const [character] = useState(selectedCharacter);
    const [showMovementGuide, setShowMovementGuide] = useState(false);
    const [showGameGuide, setShowGameGuide] = useState(false);
    const [currentAction, setCurrentAction] = useState('idle');
    const [showQuestion, setShowQuestion] = useState(false);

    const handleCollision = () => {
        setShowQuestion(true);
    };

    const handleAnswer = (answer) => {
        if (answer === 'b') {
            alert('¡Correcto! Redirigiendo al siguiente nivel...');
            navigate('/level2', { state: { selectedCharacter: character } });
        } else {
            alert('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'h') {
                setShowMovementGuide(true);
            } else if (event.key === 'i') {
                setShowGameGuide(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        const { forward, backward, left, right } = map;
        if (forward || backward || left || right) {
            if (currentAction !== 'walk') {
                setCurrentAction('walk');
            }
        } else {
            if (currentAction !== 'idle') {
                setCurrentAction('idle');
            }
        }
    }, [map, currentAction]);

    useEffect(() => {
        const audio = new Audio(ambientSong);
        audio.loop = true;
        audio.play();
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const handleCloseMovementGuide = () => {
        setShowMovementGuide(false);
    };

    const handleCloseGameGuide = () => {
        setShowGameGuide(false);
    };

    return (
        <AvatarProvider>
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                    <InGameNavBar />
                    <Views />
                </div>
                {showMovementGuide && (
                    <div className="movementGuide-overlay">
                        <MovementGuide onClose={handleCloseMovementGuide} />
                    </div>
                )}
                {showGameGuide && (
                    <div className="movementGuide-overlay">
                        <GameGuide onClose={handleCloseGameGuide} />
                    </div>
                )}
                {showQuestion && (
                    <div className="question-overlay">
                        <div className="container-questions">
                            <h2 className="h2-questions">Pregunta</h2>
                            <p className="p-questions">¿Cuál es una de las principales causas de la deforestación a nivel mundial?</p>
                            <div className='container-buttons-questions'>
                                <button onClick={() => handleAnswer('a')}>a) La pesca comercial</button>
                                <button onClick={() => handleAnswer('b')}>b) La agricultura y ganadería extensiva</button>
                                <button onClick={() => handleAnswer('c')}>c) La energía renovable</button>
                                <button onClick={() => handleAnswer('d')}>d) El transporte aéreo</button>
                            </div>
                        </div>
                    </div>
                )}
                <KeyboardControls map={map}>
                    <Canvas camera={{ position: [0, 1, 0] }}>
                        <Suspense fallback={null}>
                            <Environment />
                            <Lights />
                            <Model path="/characters/Avatars/Seed.glb" position={[30, 1, 35]} onClick={() => setShowQuestion(true)} />
                            <Text
                                position={[-5, 10, -10]}
                                fontSize={1}
                                color="RED"
                                anchorX="center"
                                anchorY="middle"
                            >
                                La deforestación afecta a nuestra biodiversidad y calidad del aire
                            </Text>
                            <Text
                                position={[20, 10, 10]}
                                fontSize={1}
                                color="RED"
                                anchorX="center"
                                anchorY="middle"
                                rotation={[0, Math.PI / -2, 0]} // Rotate the text
                            >
                                Bienvenido a nuestra experiencia interactiva
                            </Text>
                            <Physics gravity={[0, -9.81, 0]} debug>
                                <MapLvL1 />
                                <Ecctrl
                                    capsuleHalfHeight={0.5}
                                    floatingDis={0.2}
                                    amInitDis={-3}
                                    camMaxDis={-4}
                                    maxVelLimit={5} 
                                    jumpVel={3} 
                                    position={[-8, 5, 7]}
                                    gravity={-9.81}
                                    currentAction={currentAction}
                                    onCollision={handleCollision}
                                >
                                    {character === 'Científico' && <Cientific position={[0, -0.8, 0]} rotation={[0, -Math.PI / 2, 0]} action={currentAction} />}
                                    {character === 'Ingeniero' && <MaleCharacter position={[0, -0.8, 0]} rotation={[0, -Math.PI / 2, 0]} action={currentAction} />}
                                </Ecctrl>
                            </Physics>
                        </Suspense>
                        <CharacterController />
                    </Canvas>
                </KeyboardControls>
            </div>
        </AvatarProvider>
    );
};
export default Level1;
