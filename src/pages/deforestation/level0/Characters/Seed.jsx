import React from 'react';
import { useGLTF } from "@react-three/drei";
import { RigidBody } from '@react-three/rapier';

const Seed = (props) => {
  const { nodes } = useGLTF('/models-3d/Seed.glb');
  return (
    <group {...props} dispose={null} scale={[200, 200, 200]}> {/* Increase scale here */}
      <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Layer_1"
          castShadow
          receiveShadow
          geometry={nodes.Layer_1.geometry}
          material={nodes.Layer_1.material}
        />
        <mesh
          name="Layer_5"
          castShadow
          receiveShadow
          geometry={nodes.Layer_5.geometry}
          material={nodes.Layer_5.material}
        />
        <mesh
          name="Layer_2"
          castShadow
          receiveShadow
          geometry={nodes.Layer_2.geometry}
          material={nodes.Layer_2.material}
        />
        <mesh
          name="Layer_3"
          castShadow
          receiveShadow
          geometry={nodes.Layer_3.geometry}
          material={nodes.Layer_3.material}
        />
        <mesh
          name="Layer_4"
          castShadow
          receiveShadow
          geometry={nodes.Layer_4.geometry}
          material={nodes.Layer_4.material}
        />
        <group name="Layer_7" />
      </group>
    </group>
    </group>
  );
}

export default Seed;

useGLTF.preload('/models-3d/Seed.glb');

