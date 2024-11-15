import { useGLTF, useTexture } from "@react-three/drei";
import React, {  useMemo } from "react";
import { RepeatWrapping } from "three";


const PlanetEarth = (props) => {
  const { nodes, materials } = useGLTF("characters/models-3D/Planet/earth_ball.glb");
  const PATH = useMemo(() => "materials/earth/mud_cracked_dry_03_" ,[]);
  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    ambientOcclusionMap: PATH + "ao_1k.jpg",
  });

  Object.keys(floorTexture).map((key) => {
    floorTexture[key].wrapS = floorTexture[key].wrapT = RepeatWrapping;
    floorTexture[key].repeat.set(2, 2);
  });


  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Node0">
          <mesh
            name="Node1"
            geometry={nodes.Node1.geometry}
            material={materials.Material__44}
          ></mesh>
          
        </group>
      </group>
    </group>
  );
};

export default PlanetEarth;

useGLTF.preload("characters/models-3D/Planet/earth_ball.glb");
