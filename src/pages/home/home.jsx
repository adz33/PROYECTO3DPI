import "./Home.css"
import { Suspense, useCallback } from "react";
import { Canvas, useLoader} from "@react-three/fiber";
import { FirstPersonControls, FlyControls, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";


const StoneBox = () => {
    const stoneTexture = useLoader
    (TextureLoader,"./textures/stone.png")

    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            {/* Aplicando la textura a la caja */}
            <meshStandardMaterial map={stoneTexture} />
        </mesh>
    );
}

const Home = () => {

    return (
        <div class='container-home'>
            <Canvas>
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial/>
        </mesh>
                <FirstPersonControls/>
                <OrbitControls/>
            </Canvas>
        </div>

    );

};

export default Home;