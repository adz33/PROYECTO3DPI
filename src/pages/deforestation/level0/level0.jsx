import React, { useState } from 'react';
import {KeyboardControls, OrbitControls, Html} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import InitialMap from "./world/initialMap.jsx";
import Lights from './Lights/Lighs.jsx';
import Cientific from './Characters/Cientific.jsx';
import MaleCharacter from "./Characters/maleCharacter.jsx";
import Environment from './Environment/Environment.jsx';
import InGameNavBar from './Navbar/Navbar.jsx';

const characterselectect = (props) => {

};

const Level0 = () => 
    {
        const [selectedCharacter, setSelectedCharacter] = useState(null);

        
        return (
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }}>
                    <InGameNavBar />
                </div>
                <Canvas camera={{position: [-2, 3, 0] }} style={{ width: '100%', height: '100%' }}>
                    <Html position={[15, 10, 0]}>
                        <div>
                            <h1>Bienvenido al Juego</h1>
                        </div>
                    </Html>
                    <Environment />
                    <Lights />
                    <OrbitControls enableZoom={true} />
                    <MaleCharacter/>
                    <Cientific position={[0,0.3,0]} />
                    <MaleCharacter position={[2,0.3,0]} />
                    <InitialMap />
                </Canvas>
            </div>
        );
    };

export default Level0;
