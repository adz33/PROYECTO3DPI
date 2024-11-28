import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const House = (props) => {
  const { nodes, materials } = useGLTF('characters/models-3D/Planet/HouseForest.glb');
  const groupRef = useRef(); // Referencia al grupo que contiene el modelo
  const cameraRef = useRef();

  useFrame(({ camera }) => {
    if (groupRef.current && !cameraRef.current) {
      cameraRef.current = camera;
      
      // Calcular el tamaño del objeto
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Ajustar la cámara
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const distance = maxDim / (2 * Math.tan(fov / 1));
      
      camera.position.set(center.x, center.y, distance + size.z * 1.0); // Ajuste para posicionar la cámara
      camera.lookAt(center);
      camera.updateProjectionMatrix();
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0.geometry}
        material={materials['C_11.005']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_1.geometry}
        material={materials['C_12.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_2.geometry}
        material={materials['C_13.005']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_3.geometry}
        material={materials['C_16.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_4.geometry}
        material={materials['C_19.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_5.geometry}
        material={materials['C_2.014']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_6.geometry}
        material={materials['C_20.003']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_7.geometry}
        material={materials['C_21.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_8.geometry}
        material={materials['C_3.014']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_9.geometry}
        material={materials['C_4.014']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_10.geometry}
        material={materials['C_5.007']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_11.geometry}
        material={materials['C_6.007']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh0_12.geometry}
        material={materials['C_7.006']}
      />
    </group>
  );
};

export default House;

useGLTF.preload('characters/models-3D/Planet/HouseForest.glb');