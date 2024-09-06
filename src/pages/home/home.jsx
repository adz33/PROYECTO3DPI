import "./Home.css"
import { Suspense, useCallback } from "react";
import { Canvas, useLoader, useFrame} from "@react-three/fiber";
import { FirstPersonControls, FlyControls, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import React,{ useRef } from "react";


const AnimatedBox = () => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.position.y = Math.cos(clock.getElapsedTime()) * 1; // Oscila en el eje y
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial />
        </mesh>
    );
};


const Home = () => {

    return (
        <div class='container-home'>
            <Canvas>
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <ambientLight intensity={0.5} />
                <AnimatedBox/>

                <FirstPersonControls/>
            </Canvas>
        </div>

    );

};

export default Home;