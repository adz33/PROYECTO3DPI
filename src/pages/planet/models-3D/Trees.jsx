import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

const Trees = ({
  groundMesh, // Objeto 3D del suelo
  scaleFactor = 0.5, // Escala del árbol
  moveSpeed = 0.05, // Velocidad de movimiento hacia la izquierda
  resetPositionX = 5, // Posición de reinicio en X
  targetXPosition = -5, // Límite de movimiento en X
  alignmentOffset = 80, // Ajuste para alinear hacia la derecha
  ...props
}) => {
  const { nodes, materials } = useGLTF("characters/models-3D/Planet/trees.glb");
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current && groundMesh) {
      // Movimiento hacia la izquierda (en el eje X)
      groupRef.current.position.x -= moveSpeed;

      // Reiniciar posición cuando pasa más allá del límite
      if (groupRef.current.position.x < targetXPosition) {
        groupRef.current.position.x = resetPositionX;
      }

      // Calcular el tamaño del árbol y ajustar la posición respecto al suelo
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const size = box.getSize(new THREE.Vector3());
      const treeBottom = box.min.y * scaleFactor; // Parte inferior del árbol ajustada al tamaño

      // Usar raycasting para obtener la altura del suelo debajo del árbol
      const raycaster = new THREE.Raycaster();
      raycaster.set(
        new THREE.Vector3(
          groupRef.current.position.x,
          groupRef.current.position.y + 10,
          groupRef.current.position.z
        ),
        new THREE.Vector3(0, -1, 0) // Dirección hacia abajo
      );

      const intersects = raycaster.intersectObject(groundMesh);
      if (intersects.length > 0) {
        const groundY = intersects[0].point.y; // Altura del suelo
        groupRef.current.position.y = groundY - treeBottom; // Ajustar la posición en Y para estar alineado con el suelo
      }

      // Alinear el árbol hacia la derecha (ajuste en el eje Z)
      groupRef.current.position.z = alignmentOffset; // Colocarlo en la posición deseada
    }
  });

  return (
    <RigidBody type="fixed" colliders="hull">
      <group
        ref={groupRef}
        scale={[scaleFactor, scaleFactor, scaleFactor]} // Escala del árbol
        {...props}
        dispose={null}
      >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh0.geometry}
            material={materials.Green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh0_1.geometry}
            material={materials.Wood}
          />
        </group>
      </group>
    </RigidBody>
  );
};

export default Trees;

useGLTF.preload("characters/models-3D/Planet/trees.glb");
