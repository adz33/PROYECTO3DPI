
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Trees from "../../pages/planet/models-3D/Trees";


const TreesCan = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Configura el Canvas */}
      <Canvas>
        {/* Configura la iluminación */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Renderiza el modelo 3D de Trees*/}
       <Trees/>
        

        {/* Controles para la cámara */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TreesCan;
