import "./Home.css"
import { useCallback } from "react";
import { Canvas } from "@react-three/fiber";

const CustomMaterial = (props) => {
    return <meshBasicMaterial {...props} color="red" />;
  };
const Home = () => {

    return (
        <div className="Container" style={{width: '100%', height: '100%'}} >
            <Canvas>
                <mesh>
                    <boxGeometry args={[1,1,1]}/>
                    <meshBasicMaterial color={"purple"}/>
                </mesh>
            </Canvas>
        </div>

    );

};

export default Home;