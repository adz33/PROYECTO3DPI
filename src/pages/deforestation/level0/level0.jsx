import React, { useState } from 'react';
import { OrbitControls, useGLTF, Html, useTexture} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import InitialMap from "./world/initialMap.jsx";
import Lights from './Lights/Lighs.jsx';


const Level0 = () => 
    {
        const [selectedCharacter, setSelectedCharacter] = useState(null);

        return (
            <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
                <Canvas camera={{position: [0, 1, 0] }} style={{ width: '100%', height: '100%' }}>
                    <Html position={[1, 2, 2]}>
                        <div>
                            <h1>Bienvenido al Juego</h1>
                        </div>
                    </Html>
                    <Lights />
                    <OrbitControls enableZoom={true} />
                    <InitialMap />
                </Canvas>
            </div>
        );
    };

export default Level0;
