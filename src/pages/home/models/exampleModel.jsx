import React, { useMemo } from 'react';
import { useGLTF } from "@react-three/drei";

const ExampleModel = (props) => {
    const { nodes, materials } = useGLTF('models-3d/exampleModel.glb');
    return (
        <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Tree027"
            castShadow
            receiveShadow
            geometry={nodes.Tree027.geometry}
            material={materials['Mat_tree.019']}
            position={[0.85, 0.22, -1.54]}
          />
          <mesh
            name="Tree039"
            castShadow
            receiveShadow
            geometry={nodes.Tree039.geometry}
            material={materials['Mat_tree.031']}
            position={[0.75, 0.22, 1.75]}
          />
          <mesh
            name="Stump015"
            castShadow
            receiveShadow
            geometry={nodes.Stump015.geometry}
            material={materials['Mat_tree.053']}
            position={[1.03, 0.22, -4.01]}
          />
        </group>
      </group>

);
}

export default ExampleModel;

useGLTF.preload('models-3d/exampleModel.glb');

