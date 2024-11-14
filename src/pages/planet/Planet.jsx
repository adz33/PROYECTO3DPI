const { OrbitControls } = require("@react-three/drei");
const { Canvas } = require("@react-three/fiber");

const Planet = () => {
  return (
    <>
      <EarthPage/>
      <div className="container">
        <Canvas>
          <OrbitControls autoRotate={true} autoRotateSpeed={5} />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
        </Canvas>
      </div>
    </>
  );
};

export default Planet;
