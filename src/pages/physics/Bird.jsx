import { useRef, useEffect, useState } from "react";
import { RigidBody, BallCollider } from "@react-three/rapier";
import { Vector3 } from "three";

const Bird = ({ numBirds = 7, scale = 3, bounds = 10 }) => {
  const birdRefs = useRef([]);
  const [droppedItems, setDroppedItems] = useState([]); // Estado para manejar las botellas y bolsas

  // Genera posiciones y direcciones aleatorias para las aves
  const randomPosition = () => ({
    x: Math.random() * bounds * 2 - bounds,
    y: Math.random() * bounds * 0.8 + 1, // Aseguramos que las aves estén por encima del suelo
    z: Math.random() * bounds * 2 - bounds,
  });

  const randomDirection = () => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.random() * 2 - 1,
  });

  // Lista de aves con posiciones y direcciones iniciales
  const birds = useRef(
    Array.from({ length: numBirds }, () => ({
      position: randomPosition(),
      direction: randomDirection(),
    }))
  );

  // Efecto para manejar el movimiento continuo de las aves
  useEffect(() => {
    const interval = setInterval(() => {
      birdRefs.current.forEach((ref, index) => {
        if (ref) {
          const bird = birds.current[index];
          const direction = bird.direction;

          // Aplicar impulso constante para mantener el movimiento
          ref.applyImpulse(
            new Vector3(
              direction.x * 0.05,
              direction.y * 0.05,
              direction.z * 0.05
            ),
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
            bird.direction = {
              x: -direction.x,
              y: -direction.y,
              z: -direction.z,
            };

            ref.setLinvel(
              new Vector3(-direction.x * 2, -direction.y * 2, -direction.z * 2),
              true
            );
          }

          // Evitar que las aves traspasen el suelo
          if (currentPosition.y < 0.5 * scale) {
            bird.direction.y = Math.abs(direction.y); // Aseguramos que la dirección sea hacia arriba
            ref.setTranslation(
              new Vector3(currentPosition.x, 0.5 * scale, currentPosition.z),
              true
            );
            ref.setLinvel(
              new Vector3(direction.x, Math.abs(direction.y) * 2, direction.z),
              true
            );
          }
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [bounds, scale]);

  // Manejar el evento de presionar la tecla W
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "w" || event.key === "W") {
        // Cuando se presiona W, eliminar la basura del pico de las aves
        setDroppedItems([]); // Esto borra todas las botellas y bolsas del estado
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {/* Aves */}
      {birds.current.map((bird, index) => (
        <RigidBody
          key={index}
          ref={(el) => (birdRefs.current[index] = el)}
          colliders={false} // Desactivamos los colisionadores automáticos
          position={[bird.position.x, bird.position.y, bird.position.z]}
          type="dynamic"
          restitution={0.9} // Aumenta el rebote en colisiones
          friction={0.2}
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

          {/* Basura en el pico */}
          {Math.random() > 0.5 && !droppedItems.includes(index) ? (
            // Botella
            <group position={[0, 0.9 * scale, 0]} scale={4 * scale}>
              <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.4, 32]} />
                <meshStandardMaterial
                  color="lightblue"
                  transparent
                  opacity={0.8}
                />
              </mesh>
              <mesh position={[0, 0.45, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.1, 32]} />
                <meshStandardMaterial
                  color="lightblue"
                  transparent
                  opacity={0.8}
                />
              </mesh>
              <mesh position={[0, 0.55, 0]}>
                <cylinderGeometry args={[0.06, 0.06, 0.05, 32]} />
                <meshStandardMaterial color="blue" />
              </mesh>
            </group>
          ) : !droppedItems.includes(index) ? (
            // Bolsa de basura
            <group position={[0, 0.9 * scale, 0]} scale={3 * scale}>
              <mesh position={[0, 0.15, 0]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial color="gray" />
              </mesh>
              <mesh position={[0, 0.35, 0]}>
                <coneGeometry args={[0.1, 0.2, 8]} />
                <meshStandardMaterial color="black" />
              </mesh>
            </group>
          ) : null}

          {/* Colliders manuales */}
          <BallCollider args={[0.5 * scale]} />
        </RigidBody>
      ))}
    </>
  );
};

export default Bird;
