import { Environment } from "@react-three/drei";
// Puesta en escena para el universo
const SceneUniverse = ({
  receiveShadow = true,
  shadowBias = 0.001,
  shadowResolution = 512,
  shadowAttenuation = 0.2,
  height = 20,
  width = 20,
  scale = 0.1,
  environmentPath,
  background = true,
  ...props
}) => {
  if (!environmentPath) {
    console.error("Hace falta la ruta de la scena");
    return null;
  }

  const environmentFiles = [
    "cube_right.png",
    "cube_left.png",
    "cube_up.png",
    "cube_down.png",
    "cube_back.png",
    "cube_front.png",
  ];
  // Entorno de iluminacion
  return (
    <Environment
      ground={{
        receiveShadow: receiveShadow,
        shadowBias: shadowBias,
        shadowResolution: shadowResolution,
        shadowAttenuation: shadowAttenuation,
        height: height,
        width: width,
        scale: scale,
      }}
      files={environmentFiles}
      path={environmentPath}
      background={background}
      {...props}
    />
  );
};

export default SceneUniverse;
