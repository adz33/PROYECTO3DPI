import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Butterfly = ({
  count = 16, // Número de mariposas
  spaceBounds = [50, 30, 50], // Tamaño del espacio [x, y, z]
  animationSpeedRange = [0.05, 1], // Rango de velocidad de aleteo
  scaleRange = [0.1, 0.1], // Rango de tamaño
}) => {
  const { nodes, materials } = useGLTF(
    "characters/models-3D/Planet/butterfly.glb"
  );

  // Referencias para todas las mariposas
  const butterfliesRef = useRef([]);

  // Generar configuraciones únicas para cada mariposa
  const butterflies = Array.from({ length: count }, () => ({
    position: [
      THREE.MathUtils.randFloat(-spaceBounds[0] / 2, spaceBounds[0] / 2),
      THREE.MathUtils.randFloat(0, spaceBounds[1]), // Asegura que las mariposas estén dentro de los límites de altura
      THREE.MathUtils.randFloat(-spaceBounds[2] / 2, spaceBounds[2] / 2),
    ],
    scale: THREE.MathUtils.randFloat(scaleRange[0], scaleRange[1]),
    speed: {
      x: THREE.MathUtils.randFloat(0.5, 1.5),
      y: THREE.MathUtils.randFloat(0.8, 1.2),
      z: THREE.MathUtils.randFloat(0.5, 1.5),
    },
    animationSpeed: THREE.MathUtils.randFloat(
      animationSpeedRange[0],
      animationSpeedRange[1]
    ),
  }));

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Actualizar posición y aleteo de cada mariposa
    butterfliesRef.current.forEach((butterfly, index) => {
      if (butterfly) {
        const { position, speed, animationSpeed } = butterflies[index];

        // Movimiento dentro del espacio definido por `spaceBounds`
        butterfly.position.x =
          position[0] + Math.sin(time * speed.x) * (spaceBounds[0] / 2 - 1);
        butterfly.position.y =
          position[1] + Math.sin(time * speed.y) * (spaceBounds[1] / 2 - 1);
        butterfly.position.z =
          position[2] + Math.cos(time * speed.z) * (spaceBounds[2] / 2 - 1);

        // Rotación para orientar el movimiento
        butterfly.rotation.y = Math.atan2(
          Math.cos(time * speed.z),
          Math.sin(time * speed.x)
        );

        // Aleteo
        const wing = butterfly.children[0];
        if (wing) {
          wing.rotation.z =
            Math.sin(time * animationSpeed * 100) * Math.PI * 0.2;
        }
      }
    });
  });

  return (
    <group>
      {butterflies.map(({ position, scale }, index) => (
        <group
          key={index}
          ref={(el) => (butterfliesRef.current[index] = el)} // Asignar referencia única
          position={position}
          scale={[scale, scale, scale]}
        >
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes?.Node1?.geometry}
              material={
                materials["bytt:___Default"] || new THREE.MeshStandardMaterial()
              }
            />
          </group>
        </group>
      ))}
    </group>
  );
};

export default Butterfly;

useGLTF.preload("characters/models-3D/Planet/butterfly.glb");
