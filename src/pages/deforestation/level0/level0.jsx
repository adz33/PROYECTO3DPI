import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {KeyboardControls, OrbitControls, Html} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import InitialMap from "./world/initialMap.jsx";
import Lights from './Lights/Lighs.jsx';
import Cientific from './Characters/Cientific.jsx';
import MaleCharacter from "./Characters/maleCharacter.jsx";
import Environment from './Environment/Environment.jsx';
import InGameNavBar from './Navbar/Navbar.jsx';
import MovementGuide from './Text/movementGuide.jsx';
import './level0.css';

const Level0 = () => 
    {
        const location = useLocation();
        const { selectedCharacter } = location.state || {};
        const [character] = useState(selectedCharacter);
        const [showMovementGuide, setShowMovementGuide] = useState(false);

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
                <Canvas camera={{position: [-2, 3, 0] }} style={{ width: '100%', height: '100%' }}>
                    <Html position={[15, 10, 0]}>
                            <h1>Bienvenido al Juego</h1>
                            <p>Presiona H para ver la guía de movimientos</p>
                    </Html>
                    <Environment />
                    <Lights />
                    <OrbitControls enableZoom={true} />
                    {character === 'Científico' && <Cientific position={[0,0.2,0]}/>}
                    {character === 'Ingeniero' && <MaleCharacter position={[0,0.2,0]}/>}
                    <InitialMap />
                </Canvas>
            </div>
        );
    };

export default Level0;
