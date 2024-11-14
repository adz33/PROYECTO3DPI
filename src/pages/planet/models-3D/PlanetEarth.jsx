import { useGLTF } from "@react-three/drei"
import { MeshBasicMaterial } from "three";


const PlanetEarth = ()=> {
    const planetEarthModel = useGLTF("characters/models-3D/Planet/earth_ball.glb");
    console.log(planetEarthModel);

    return (
        <mesh>
            <primitive object={planetEarthModel.scene}/>
        </mesh>
    );
};

export default PlanetEarth;

useGLTF.preload("characters/models-3D/Planet/earth_ball.glb")