import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotationPlanet = ({ children, speed = 0.01 }) => {
  const groupRef = useRef();

  // Hook para actualizar la rotación en cada frame
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed; // Incrementa la rotación en el eje Y
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default RotationPlanet;
