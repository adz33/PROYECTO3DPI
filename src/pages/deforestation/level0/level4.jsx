import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import {KeyboardControls, OrbitControls, Html, Text} from '@react-three/drei';
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
import Butterfly from './Characters/Butterfly.jsx';
import CharacterController from './CharacterController/CharacterController.jsx';
import { AvatarProvider } from '../../../context/AvatarContext.jsx';
import MapLvL4 from './world/MapLvL4.jsx';
import Views3 from './View/View3.jsx';
import ambientSong from '../../../../public/sounds/ambientSong.wav';

const Level4 = () => 
    {
        const map = useMovements();
        const location = useLocation();
        const { selectedCharacter = 'Científico' } = location.state || {};
        const [character] = useState(selectedCharacter);
        const [showMovementGuide, setShowMovementGuide] = useState(false);
        const [currentAction, setCurrentAction] = useState('idle');

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
        }, [setShowMovementGuide]);

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
                        <Views3 />
                    </div>
                    {showMovementGuide && (
                        <div className="movementGuide-overlay">
                            <MovementGuide onClose={handleCloseMovementGuide} />
                        </div>
                    )}
                    <KeyboardControls map={map}>
                        <Canvas camera={{position: [0, 1, 0] }}>
                        <Text
                                position={[20, 15, 10]}
                                fontSize={1}
                                color="RED"
                                anchorX="center"
                                anchorY="middle"
                                rotation={[0, Math.PI / -2, 0]} // Rotate the text
                            >
                                Felicitaciones, has completado el Juego!!
                            </Text>
                            <Text
                                position={[20, 10, 10]}
                                fontSize={1}
                                color="RED"
                                anchorX="center"
                                anchorY="middle"
                                rotation={[0, Math.PI / -2, 0]} // Rotate the text
                            >
                                Asi se veria nuestro mundo si ayudamos al cuidado del medio ambiente
                            </Text>
                            <Suspense fallback={null}>
                            <Environment />
                            <Lights />
                            <Physics gravity={[0, -9.81, 0]} debug>
                                <MapLvL4 />
                                
                                <Butterfly castShadow receiveShadow />
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

export default Level4;