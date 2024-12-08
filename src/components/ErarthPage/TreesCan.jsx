import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Trees from "../../pages/planet/models-3D/Trees";

const TreesCan = (props) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Configura el Canvas */}
      <Canvas shadows>
        {/* Configura la iluminación */}
        <ambientLight intensity={0.5} />

        {/* Luz direccional que proyecta sombras */}
        <directionalLight
          position={[5, 5, 5]} // Posición de la luz direccional
          intensity={90} // Intensidad de la luz
          castShadow // Habilitar sombras
          shadow-mapSize-width={1024} // Tamaño del mapa de sombras
          shadow-mapSize-height={1024}
          shadow-camera-near={0.1} // Ajustes de la cámara de sombras
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />

        {/* Renderiza el modelo 3D de Trees */}
        <Trees position={[0, 1, 0]} castShadow receiveShadow />

        {/* Suelo con sombras */}
        <mesh
          position={[0, -1, 0]} // Colocamos el plano debajo del árbol
          receiveShadow // Aseguramos que el suelo reciba sombras
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="gray" />
        </mesh>

        {/* Configura la cámara */}
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />

        {/* Controles para la cámara */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TreesCan;
