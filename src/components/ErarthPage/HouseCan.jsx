import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import House from "../../pages/planet/models-3D/House";
import Butterfly from "../../pages/planet/models-3D/Butterfly";
import Trees from "../../pages/planet/models-3D/Trees";
import { Suspense, useState } from "react";
import { Physics } from "@react-three/rapier";
import Bird from "../../pages/physics/Bird";

const HouseCan = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleOpenInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Physics debug>
            {/* Configura la iluminación */}
            <ambientLight intensity={0.9} />

            {/* Luz direccional con sombras */}
            <directionalLight
              position={[0, 0, 1]}
              intensity={3}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={0.1}
              shadow-camera-far={10}
            />

            {/* Luz puntual para darle más profundidad a las sombras */}
            <spotLight
              position={[6, 9, 10]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              angle={0.15}
              penumbra={1}
            />

            {/* Renderiza los modelos 3D */}
            <House castShadow receiveShadow />
            <Butterfly castShadow receiveShadow />
            <Trees castShadow receiveShadow />
            <Bird castShadow receiveShadow/>

            {/* Cámara y controles */}
            <PerspectiveCamera makeDefault position={[0, 0, 100]} fov={75} />
            <OrbitControls />

            {/* Texto y botón en 3D */}
            <Html position={[1, 40, 1]} style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "20px",
                  margin: "1px 0",
                  color: "black",
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  textShadow:
                    "2px 2px 5px rgba(0, 0, 0, 0.7), -2px -2px 5px rgba(0, 0, 0, 0.5)",
                  transform: "rotateX(10deg) rotateY(10deg)",
                }}
              >
                HERRAMIENTAS PARA COMBATIR LA EROSION DEL SUELO.
              </h1>
              <button
                onClick={handleOpenInfo}
                style={{
                  backgroundColor: "rgba(0, 100, 0, 0.5)",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(1, 1, 1, 0.1)",
                }}
              >
                ?
              </button>
              {showInfo && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    zIndex: 1000,
                    maxWidth: "600px",
                    minWidth: "500px",
                    width: "auto",
                    textAlign: "center",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <h2 style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
                    REFORESTACION Y TECNICAS DE CONSERVACION DEL SUELO.
                  </h2>
                  <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
                    CONSTRUYE MENOS Y SIEMBRA MAS.
                  </p>
                  <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
                    EDUCATE Y CONCIENTIZATE, UNIDOS SOMO MAS.
                  </p>
                  <button
                    onClick={handleCloseInfo}
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    Aceptar
                  </button>
                </div>
              )}
            </Html>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HouseCan;
