// Importa los módulos necesarios

import { Canvas } from "@react-three/fiber";
import PlanetEarth from "../../pages/planet/models-3D/PlanetEarth";
import { OrbitControls } from "@react-three/drei";

const EarthPage = () => {
    return (
        <div style={{width: "100w", height: "100vh"}}>
            {/* Configura el Canvas */}
            <Canvas>
                {/* Configura la iluminación */}
               <ambientLight intensity={0.5}/>
               <directionalLight position={[5,5,5]} intensity={1}/>

               {/* Renderiza el modelo 3D de PlanetEarth */}
               <PlanetEarth/>

               {/* Controles para la cámara */}
               <OrbitControls/>
            </Canvas>
        </div>
    );
};


export default EarthPage;