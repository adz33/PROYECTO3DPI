import { SpotLight } from "@react-three/drei";
import { Color } from "three";

const Lights = () => {
    return (
        <>
        <ambientLight intensity={1}/>
        <directionalLight position={[-10,10,0]} intensity={3}/>
        </>
    );
};
export default Lights;