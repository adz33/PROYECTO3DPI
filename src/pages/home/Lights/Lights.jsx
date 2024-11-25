import { SpotLight } from "@react-three/drei";
import { Color } from "three";

const Lights = () => {
    return (
        <>
        <ambientLight intensity={1}/>
        <directionalLight position={[0,10,-10]} intensity={6}/>
        </>
    );
};
export default Lights;