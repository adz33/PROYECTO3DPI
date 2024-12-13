import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { useRef } from "react";

const PostProcessing = () => {
  const sunRef = useRef();

  return (
    <>
      <mesh ref={sunRef} position={5}>
      <sphereGeometry args={[0.5, 32, 32]} /> {/* Esfera pequeña */}
        <meshBasicMaterial color={"#FF0000"} />
      </mesh>
      <EffectComposer>
        {sunRef.current && (
          <GodRays
            sun={sunRef} // Referencia al mesh como fuente del efecto
            samples={60} // Cantidad de muestras para calidad del efecto
            density={0.96} // Densidad del rayo
            decay={0.95} // Decadencia para intensidad
            weight={0.4} // Peso de la intensidad
            exposure={0.8} // Nivel de exposición
            clampMax={1.0} // Intensidad máxima
            blendFunction={BlendFunction.SCREEN} // Cómo mezclar con la escena
            blur={true}
          />
        )}
      </EffectComposer>
    </>
  );
};

export default PostProcessing;
