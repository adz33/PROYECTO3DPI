import { Physics, useRapier } from "@react-three/rapier";
import Bird from "../Bird";

const BirdCan = () => {
  const cameraSettings = {
    position: [0, 2, 5],
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Controls />
      <Lights />
      <Physics debug>
        <Bird name="bird" position={[2, 2, 0]} castShadow />
      </Physics>
    </Canvas>
  );
};

export default BirdCan;
