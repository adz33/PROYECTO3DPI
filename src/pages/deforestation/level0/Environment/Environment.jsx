import { Sky, SpotLight } from "@react-three/drei";
import { Color } from "three";

const Environment = () => {
    return (
        <>
        <Sky 
            turbidity={10}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
            inclination={0.5} // Sun elevation
            azimuth={0.25} // Sun rotation
        />
        </>
    );
};
export default Environment;