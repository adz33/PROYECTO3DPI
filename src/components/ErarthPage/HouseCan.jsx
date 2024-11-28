import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import House from "../../pages/planet/models-3D/House";
import Butterfly from "../../pages/planet/models-3D/Butterfly";
import Trees from "../../pages/planet/models-3D/Trees";


const HouseCan = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Configura el Canvas */}
      <Canvas>
        {/* Configura la iluminación */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Renderiza el modelo 3D de Hose*/}
        <House />
        <Butterfly/>
        <Trees/>

        {/* Controles para la cámara */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default HouseCan;
