import { SpotLight } from "@react-three/drei";
import { Color } from "three";

const Lights = () => {
    return (
        <>
        <directionalLight position={[-10,10,0]} intensity={3}/>
        </>
    );
};
export default Lights;