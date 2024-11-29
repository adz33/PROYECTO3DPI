import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import {KeyboardControls, OrbitControls, Html} from '@react-three/drei';
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


const Level0 = () => 
    {
        const map = useMovements();
        const location = useLocation();
        const { selectedCharacter } = location.state || {};
        const [character] = useState(selectedCharacter);
        const [showMovementGuide, setShowMovementGuide] = useState(false);

        useEffect(() => {
            const handleKeyDown = (event) => {
                if (event.key === 'h') {
                    setShowMovementGuide(true);
                }
                // Add logic to handle key down events for movement
                // ...
            };

            const handleKeyUp = (event) => {
                // Add logic to handle key up events to stop movement
                // ...
            };

            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }, [setShowMovementGuide]);

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
                        <Html position={[15, 10, 0]}>
                                <h1>Bienvenido al Juego</h1>
                                <p>Presiona H para ver la guía de movimientos</p>
                        </Html>
                        <Suspense fallback={null}>
                        <Environment />
                        <Lights />
                        <Physics debug>
                            <InitialMap />
                            <Ecctrl
                                capsuleHalfHeight={0.5}
                                floatingDis={0.2}
                                amInitDis={-3}
                                camMaxDis={-4}
                                maxVelLimit={5} 
                                jumpVel={3} 
                                position={[-8, 5, 7]}
                                gravity={-9.81} // Add this line to affect the character with gravity
                            >
                            {character === 'Científico' && <Cientific position={[0,-0.8,0]} rotation={[0, -Math.PI / 2, 0]} />}
                            {character === 'Ingeniero' && <MaleCharacter position={[0,-0.8,0]} rotation={[0, -Math.PI / 2, 0]} />}
                            </Ecctrl>
                        </Physics>
                        </Suspense>
            d        </Canvas>
                </KeyboardControls>
            </div>
        );
    };

export default Level0;
