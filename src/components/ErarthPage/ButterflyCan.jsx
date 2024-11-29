import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Butterfly from "../../pages/planet/models-3D/Butterfly";


const ButterflyCan = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Configura el Canvas */}
      <Canvas castShadow receiveShadow>
        {/* Configura la iluminación */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        
        />

        {/* Renderiza el modelo 3D de Butterfly*/}
       <Butterfly/>
       
        

        {/* Controles para la cámara */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ButterflyCan;
