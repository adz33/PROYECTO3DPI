// Importa los módulos necesarios
import { Canvas } from "@react-three/fiber";
import PlanetEarth from "../../pages/planet/models-3D/PlanetEarth";
import { Html, OrbitControls } from "@react-three/drei";
import "./EarthPage.css";
import { Suspense, useState } from "react";
import SceneUniverse from "../sceneUniverse/SceneUniverse";

const EarthPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenInfo = () => {
    setShowInfo(true);
  };

  const handleCloseInfo = () => {
    setShowInfo(false);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Configura el Canvas */}
      <Canvas>
        <Suspense>
          {/* Fondo y ambiente */}
          <SceneUniverse
            receiveShadow={true}
            shadowBias={0.01}
            shadowResolution={2048}
            shadowAttenuation={0.5}
            height={20}
            width={20}
            scale={0.1}
            environmentPath="/Scene/" // Se le debe pasar un path a un cubemap
            background={true}
          />

          {/* Configura la iluminación */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Renderiza el modelo 3D de PlanetEarth */}
          <PlanetEarth />

          {/* Controles para la cámara */}
          <OrbitControls />

          {/* Elementos de UI con Html */}
          <Html position={[-5, 100, -200]} style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "14px",
                margin: "20px 0",
                color: "red",
              }}
            >
              CAUSAS Y CONSECUENCIAS DE LA EROSION DEL SUELO
            </h1>

            {/* Botón translúcido */}
            <button
              onClick={handleOpenInfo}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Fondo translúcido
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
              ?
            </button>

            {showInfo && (
              <div
                style={{
                  position: "absolute",
                  top: "120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  zIndex: 10,
                  maxWidth: "800px", // Ajusta el ancho máximo
                  textAlign: "center", // Centra el contenido
                  lineHeight: "1.5", // Espaciado entre líneas

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
                  maxWidth: "600px", // Ancho máximo del tooltip
                  minWidth: "500px", // Ancho mínimo del tooltip
                  width: "auto", // Ancho automático del tooltip
                  textAlign: "center", // Alineación del texto
                  whiteSpace: "pre-wrap", // Ajuste del texto dentro del contenedor
                }}
              >
                <h2 style={{ fontSize: "20px", margin: "0 0 10px 0" }}>
                  ¿CUALES SON LAS CAUSAS Y CONSECUENCIAS?
                </h2>
                <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
                  Las principales causas de la erosion del suelo son: La lluvia,
                  el flujo de agua,Levantamiento y transporte de particulas, La
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
