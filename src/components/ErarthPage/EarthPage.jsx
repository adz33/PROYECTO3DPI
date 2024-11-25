import { Canvas } from "@react-three/fiber";
import PlanetEarth from "../../pages/planet/models-3D/PlanetEarth";
import { Cloud, Html, OrbitControls } from "@react-three/drei";
import "./EarthPage.css";
import { Suspense, useState, useEffect } from "react";
import SceneUniverse from "../sceneUniverse/SceneUniverse";
import { PerspectiveCamera } from "@react-three/drei";

const EarthPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [cloudColorIndex, setCloudColorIndex] = useState(0); // Índice del color actual

  // Lista de colores disponibles para las nubes
  const cloudColors = [
    "rgba(0, 255, 255, 0.8)", // Cyan
    "rgba(255, 69, 0, 0.8)", // Naranja
    "rgba(173, 216, 230, 0.8)", // Azul claro
    "rgba(124, 252, 0, 0.8)", // Verde
    "rgba(255, 20, 147, 0.8)", // Rosa
  ];

  // Obtiene el color actual según el índice
  const currentCloudColor = cloudColors[cloudColorIndex];

  const handleOpenInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  // Manejo del evento de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "c" || event.key === "C") {
        // Avanza al siguiente color de forma cíclica
        setCloudColorIndex((prevIndex) => (prevIndex + 1) % cloudColors.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Limpia el evento cuando el componente se desmonta
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cloudColors.length]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense>
          <SceneUniverse
            receiveShadow={true}
            shadowBias={0.01}
            shadowResolution={2048}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/Scene/"
            background={true}
          />
          <ambientLight intensity={0.03} />
          <directionalLight position={[20, 50, 5]} intensity={4} castShadow />

          {/* Componente Cloud con color dinámico */}
          <Cloud
            seed={3}
            scale={8}
            volume={5}
            color={currentCloudColor} // Color dinámico basado en el índice
            fade={100}
            segments={40}
            bounds={[12, 12, 12]}
            position={[0, 0, 0]}
            opacity={0.5}
            growth={5}
            speed={0.5}
            concentrate="inside"
          />

          <PlanetEarth position={[0, 0, 0]} castShadow receiveShadow />
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[0, 0, 100]} fov={75} />

          <Html position={[0, 0, 0]} style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "14px",
                margin: "20px 0",
                color: "white",
                textAlign: "center",
              }}
            >
              CAUSAS Y CONSECUENCIAS DE LA EROSION DEL SUELO
            </h1>
            <button
              onClick={handleOpenInfo}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              ?{/* Cuadro de texto */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "200%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)", // Fondo oscuro translúcido
                  color: "white", // Texto blanco para contraste
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para contraste
                }}
              >
                <p style={{ margin: 0 }}>
                  Presiona la tecla <strong>C</strong>.
                </p>
              </div>
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
                  ¿CUALES SON LAS CAUSAS Y CONSECUENCIAS?
                </h2>
                <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
                  Las principales causas de la erosion del suelo son: La lluvia,
                  el flujo de agua, Levantamiento y transporte de particulas, La
                  eliminación de árboles y vegetación, Agricultura intensiva,
                  Construcción y urbanización.
                </p>
                <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
                  Las principales consecuencias de la erosion del suelo son:
                  Pérdida de fertilidad, Sedimentación de cuerpos de agua y
                  Desertificación Daños a infraestructuras.
                </p>
                <button
                  onClick={handleCloseInfo}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "red",
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
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthPage;
