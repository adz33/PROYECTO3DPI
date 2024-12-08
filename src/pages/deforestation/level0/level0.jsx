import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import {KeyboardControls, OrbitControls, Html, Text} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import InitialMap from "./world/initialMap.jsx";
import Lights from './Lights/Lighs.jsx';
import Environment from './Environment/Environment.jsx';
import InGameNavBar from './Navbar/Navbar.jsx';
import MovementGuide from './Text/movementGuide.jsx';
import Cientific from './Characters/Cientific.jsx';
import MaleCharacter from './Characters/MaleCharacter.jsx';
import useMovements from './utils/key-movements.js';
import './level0.css';
import { Physics } from '@react-three/rapier';
import Ecctrl from 'ecctrl';
import MapLvL0 from './world/mapLvL0.jsx';
import Butterfly from './Characters/Butterfly.jsx';

const Level0 = () => 
    {
        const map = useMovements();
        const location = useLocation();
        const { selectedCharacter } = location.state || {};
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

        const handleCloseMovementGuide = () => {
            setShowMovementGuide(false);
        };

        return (
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                    <InGameNavBar />
                </div>
                {showMovementGuide && (
                    <div className="movementGuide-overlay">
                        <MovementGuide onClose={handleCloseMovementGuide} />
                    </div>
                )}
                <KeyboardControls map={map}>
                    <Canvas camera={{position: [0, 1, 0] }}>
                        <Text
                            position={[-5, 5, -10]}
                            fontSize={1}
                            color="RED"
                            anchorX="center"
                            anchorY="middle"
                        >
                            La deforestación afecta a nuestra biodiversidad y calidad del aire
                        </Text>
                        <Text
                            position={[0, 15, -10]}
                            fontSize={1}
                            color="RED"
                            anchorX="center"
                            anchorY="middle"
                        >
                            No solo sufre nuestros paisajes, tambien nuestra fauna y flora
                        </Text>
                        <Text
                            position={[26, 8, -10]}
                            fontSize={1}
                            color="RED"
                            anchorX="center"
                            anchorY="middle"
                        >
                            Este es el proceso de la deforestación
                            </Text>
                        <Html position={[0, -5, 0]} style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}>
                            <p>Presiona H para ver la guía de movimientos</p>
                        </Html>
                        <Suspense fallback={null}>
                        <Environment />
                        <Lights />
                        <Physics gravity={[0, -9.81, 0]} debug>
                            <MapLvL0 />
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
                    </Canvas>
                </KeyboardControls>
            </div>
        );
    };

export default Level0;
