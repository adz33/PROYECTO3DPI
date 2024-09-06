import "./Home.css"
import { Suspense, useCallback } from "react";
import { Canvas, useLoader} from "@react-three/fiber";
import { FirstPersonControls, FlyControls, OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { TextureLoader } from "three";

const CustomMaterial = (props) => {
    return <meshBasicMaterial {...props} color="red" />;
};


const Home = () => {

    return (
        <div class='container-home'>
            <Canvas>
                <mesh>
                    <boxGeometry args={[1,1,1]}/>
                    <meshBasicMaterial color={"purple"}/>
                </mesh>
                <FirstPersonControls/>
            </Canvas>
        </div>

    );

};

export default Home;