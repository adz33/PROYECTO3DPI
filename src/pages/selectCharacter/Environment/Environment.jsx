import { Sky, SpotLight } from "@react-three/drei";
import { Color } from "three";

const Environment = () => {
    return (
        <>
        <Environment
            files={[
                "/Environments/png/px.png",
                "/Environments/png/nx.png",
                "/Environments/png/py.png",
                "/Environments/png/ny.png",
                "/Environments/png/pz.png",
                "/Environments/png/nz.png"
            ]}
        />
        </>
    );
};
export default Environment;