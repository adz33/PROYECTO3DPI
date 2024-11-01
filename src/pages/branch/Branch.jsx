import { Canvas } from "@react-three/fiber";
import "./Branch.css";
import BranchesSoil from "./models-3d/BranchesSoil";
import { OrbitControls } from "@react-three/drei";
import SoilErosionPage from "../soilErosion/SoilErosionPage";


const Branch = () => {
  return (
    <>
      < SoilErosionPage />
      <div className="container">
        <Canvas>
          <OrbitControls/>
          <BranchesSoil />
        </Canvas>
      </div>
    </>
  );
};

export default Branch;
