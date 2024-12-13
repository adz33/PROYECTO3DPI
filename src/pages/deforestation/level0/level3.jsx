import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {KeyboardControls, useGLTF} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Lights from './Lights/Lighs.jsx';
import Environment from './Environment/Environment.jsx';
import InGameNavBar from './Navbar/Navbar.jsx';
import MovementGuide from './Text/movementGuide.jsx';
import Cientific from './Characters/Cientific.jsx';
import MaleCharacter from './Characters/maleCharacter.jsx';
import useMovements from './utils/key-movements.js';
import './level0.css';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import CharacterController from './CharacterController/CharacterController.jsx';
import { AvatarProvider } from '../../../context/AvatarContext.jsx';
import MapLvL3 from './world/MapLvL3.jsx';
import Views2 from './View/View2.jsx';
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


const Level2 = () => 
    {
        const map = useMovements();
        const location = useLocation();
        const navigate = useNavigate();
        const { selectedCharacter } = location.state || {};
        const [character] = useState(selectedCharacter);
        const [showMovementGuide, setShowMovementGuide] = useState(false);
        const [currentAction, setCurrentAction] = useState('idle');
        const [showQuestion, setShowQuestion] = useState(false);
    
        const handleCollision = () => {
            setShowQuestion(true);
        };
    
        const handleAnswer = (answer) => {
            if (answer === 'b') {
                alert('¡Correcto! Redirigiendo al siguiente nivel...');
                navigate('/level4', { state: { selectedCharacter: character } });
            } else {
                alert('Respuesta incorrecta. Inténtalo de nuevo.');
            }
        };
    
        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.key === 'h') {
                    setShowMovementGuide(true);
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
        return (
            <AvatarProvider>
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                    <InGameNavBar />
                    <Views2 />
                </div>
                {showMovementGuide && (
                    <div className="movementGuide-overlay">
                        <MovementGuide onClose={handleCloseMovementGuide} />
                    </div>
                )}
                {showQuestion && (
                    <div className="question-overlay">
                        <div className="container-questions">
                            <h2 className="h2-questions">Pregunta 3</h2>
                            <p className="p-questions">¿Qué medida puede ayudar a reducir la deforestación?</p>
                            <div className='container-buttons-questions'>
                                <button onClick={() => handleAnswer('a')}>a) Incrementar el uso de plásticos no biodegradables </button>
                                <button onClick={() => handleAnswer('b')}>b) Promover prácticas de agricultura sostenible </button>
                                <button onClick={() => handleAnswer('c')}>c) Expandir las áreas urbanas sin planificación </button>
                                <button onClick={() => handleAnswer('d')}>d) Aumentar la tala de árboles para combustible </button>
                            </div>
                        </div>
                    </div>
                )}
                    <KeyboardControls map={map}>
                        <Canvas camera={{position: [0, 1, 0] }}>
                            <Suspense fallback={null}>
                            <Environment />
                            <Lights />
                            <Model path="/characters/Avatars/Seed.glb" position={[30, 1, 35]} onClick={() => setShowQuestion(true)} />
                            <Physics gravity={[0, -9.81, 0]} debug>
                                <MapLvL3 />
                                <Ecctrl
                                    capsuleHalfHeight={0.5}
                                    floatingDis={0.2}
                                    amInitDis={-3}
                                    camMaxDis={-4}
                                    maxVelLimit={5} 
                                    jumpVel={3} 
                                    position={[-8, 5, 7]} // Ajusta esta posición si es necesario
                                    gravity={-9.81} // Asegúrate de que la gravedad esté configurada
                                    currentAction={currentAction} // Pass currentAction to Ecctrl
                                >
                                {character === 'Científico' && <Cientific position={[0,-0.8,0]} rotation={[0, -Math.PI / 2, 0]} action={currentAction} />}
                                {character === 'Ingeniero' && <MaleCharacter position={[0,-0.8,0]} rotation={[0, -Math.PI / 2, 0]} action={currentAction} />}
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

export default Level2;
