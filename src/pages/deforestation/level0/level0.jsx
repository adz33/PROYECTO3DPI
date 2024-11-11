import React, { useState } from 'react';
import { OrbitControls, useGLTF, Html, useTexture} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import InitialMap from "./world/initialMap.jsx";


const Level0 = () => 
    {
        const [selectedCharacter, setSelectedCharacter] = useState(null);

        return (
            <div>
                <Canvas camera={{ fov: 49, position: [30, 0.25, 0.5] }}>
                    <ambientLight />
                    <directionalLight position={[10, 10, 10]} intensity={5} />
                    <OrbitControls enableZoom={true} />
                    <InitialMap />
                </Canvas>
            </div>
        );
    };

export default Level0;
