import { useRef, useEffect } from "react";
import { RigidBody, BallCollider, CuboidCollider } from "@react-three/rapier";
import { Vector3 } from "three";

const Bird = ({ numBirds = 10, scale = 1, bounds = 10 }) => {
  const birdRefs = useRef([]);

  // Genera posiciones y direcciones aleatorias para las aves
  const randomPosition = () => ({
    x: Math.random() * bounds * 2 - bounds,
    y: Math.random() * bounds * 2 - bounds,
    z: Math.random() * bounds * 2 - bounds,
  });

  const randomDirection = () => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.random() * 2 - 1,
  });

  // Lista de aves con posiciones y direcciones iniciales
  const birds = Array.from({ length: numBirds }, () => ({
    position: randomPosition(),
    direction: randomDirection(),
  }));

  // Efecto para manejar el movimiento continuo de las aves
  useEffect(() => {
    const interval = setInterval(() => {
      birdRefs.current.forEach((ref, index) => {
        if (ref) {
          const direction = birds[index].direction;

          // Aplicar impulso continuo para mantener el movimiento
          ref.applyImpulse(
            new Vector3(direction.x * 0.05, direction.y * 0.05, direction.z * 0.05),
            true
          );

          // Obtener la posición actual
          const currentPosition = ref.translation();

          // Detectar si el ave está cerca de los límites y ajustar dirección
          if (
            Math.abs(currentPosition.x) > bounds ||
            Math.abs(currentPosition.y) > bounds ||
            Math.abs(currentPosition.z) > bounds
          ) {
            birds[index].direction = {
              x: -direction.x,
              y: -direction.y,
              z: -direction.z,
            };

            // Aplicar corrección para evitar que el ave quede fuera del área
            ref.setLinvel(
              new Vector3(-direction.x * 2, -direction.y * 2, -direction.z * 2),
              true
            );
          }
        }
      });
    }, 50); // Intervalo corto para mantener fluidez

    return () => clearInterval(interval);
  }, [birds, bounds]);

  return (
    <>
      {birds.map((bird, index) => (
        <RigidBody
          key={index}
          ref={(el) => (birdRefs.current[index] = el)}
          colliders={false} // Desactivamos los colisionadores automáticos
          position={[bird.position.x, bird.position.y, bird.position.z]}
          type="dynamic" // Aseguramos que los cuerpos sean dinámicos
          friction={0.2}
          restitution={0.9}
        >
          {/* Cuerpo del ave */}
          <mesh scale={[scale, scale, scale]}>
            <sphereGeometry args={[0.5, 40, 16]} />
            <meshStandardMaterial color="blue" />
          </mesh>

          {/* Alas del ave */}
          <mesh position={[0.8 * scale, 0.2 * scale, 0]}>
            <boxGeometry args={[0.6 * scale, 0.2 * scale, 0.1 * scale]} />
            <meshStandardMaterial color="gray" />
          </mesh>
          <mesh position={[-0.8 * scale, 0.2 * scale, 0]}>
            <boxGeometry args={[0.6 * scale, 0.2 * scale, 0.1 * scale]} />
            <meshStandardMaterial color="gray" />
          </mesh>

          {/* Pico del ave */}
          <mesh position={[0, 0.7 * scale, 0]}>
            <coneGeometry args={[0.1 * scale, 0.3 * scale, 4]} />
            <meshStandardMaterial color="orange" />
          </mesh>

          {/* Cola del ave */}
          <mesh position={[0, -0.5 * scale, -0.4 * scale]}>
            <coneGeometry args={[0.2 * scale, 0.4 * scale, 4]} />
            <meshStandardMaterial color="brown" />
          </mesh>

          {/* Colliders manuales */}
          <BallCollider args={[0.5 * scale]} />
          <CuboidCollider
            args={[0.6 * scale, 0.3 * scale, 0.1 * scale]}
            position={[0.8 * scale, 0.2 * scale, 0]}
          />
          <CuboidCollider
            args={[0.6 * scale, 0.3 * scale, 0.1 * scale]}
            position={[-0.8 * scale, 0.2 * scale, 0]}
          />
        </RigidBody>
      ))}
    </>
  );
};

export default Bird;
