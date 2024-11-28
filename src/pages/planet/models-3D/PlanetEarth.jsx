import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three";
import RotationPlanet from "../../../components/animations/RotationPlanet"; // Importa el componente de rotación


const PlanetEarth = (props) => {
  const { nodes, materials } = useGLTF("characters/models-3D/Planet/planetNew.glb");
  const PATH = useMemo(() => "materials/earth/mud_cracked_dry_03_", []);
  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
  });

  // Configura las texturas
  Object.keys(floorTexture).forEach((key) => {
    floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
    floorTexture[key].repeat.set(2, 2);
  });

  return (
  //  <RigidBody>
    <RotationPlanet speed={0.01}> {/* Envuelve el planeta con el componente de rotación */}
      <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Node0" position={[0, 0, 15.707]}>
          <mesh
            name="Node1"
            castShadow
            receiveShadow
            geometry={nodes.Node1.geometry}
            material={materials['Material__44.001']}
            position={[0, 0, -15.707]}
          />
        </group>
      </group>
    </group>
    </RotationPlanet>

  //  </RigidBody> 
    
  );
};

export default PlanetEarth;

useGLTF.preload("characters/models-3D/Planet/earth_ball.glb");
