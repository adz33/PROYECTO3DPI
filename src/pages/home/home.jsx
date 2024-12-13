import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  Suspense,
} from "react";
import { Canvas } from "@react-three/fiber";
import "./home.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { OrbitControls, Sky, PositionalAudio } from "@react-three/drei";
import ExampleModel from "./models/exampleModel";
import Lights from "./Lights/Lights";
import Video from "../../forestVideo/Video";
import PostProcessing from "../postProcessing/PostProcessing";
import Butterfly from "../planet/models-3D/Butterfly";

const Home = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  // Simula la inicialización de un contexto o recurso necesario para el audio
  useEffect(() => {
    const initializeAudio = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simula un pequeño retraso
      setAudioReady(true);
    };
    initializeAudio();
  }, []);

  const handleDeforestationClick = () => {
    navigate("/deforestation");
  };

  const handleSoilErosionClick = () => {
    navigate("/soilErosion");
  };

  const handleSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.setVolume(1);
    }
  }, []);

  if (!audioReady) {
    return <div className="loading">Cargando recursos...</div>;
  }

  return (
    <div className="container-home">
      <div className="deforestation-Navbar">
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src="/images/Logo.svg"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="/selectCharacter" className="nav-link">
                  {/* Usamos to en lugar de href para redireccinar, redirige a la pagina erosión del suelo */}
                  Experiencia Interactiva
                </NavLink>
                <NavLink to="/soilErosion" className="nav-link">
                  {/* Usamos to en lugar de href para redireccinar, redirige a la pagina erosión del suelo */}
                  Erosión del Suelo
                </NavLink>
                <NavLink to="/Deforestation" className="nav-link">
                  Deforestación
                </NavLink>
              </Nav>
              <Nav className="ms-auto">
                <NavLink to="/Login" className="nav-link">
                  Cerrar Sesión
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/home/slides/slide.jpg"
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/home/slides/slide-1.jpg"
              alt="Slide 2"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row">
        <div className="item-deforestation">
          <h2> Que es la deforestación</h2>
          <p>
            La deforestación es la eliminación de bosques o áreas verdes,
            trasformando estas tierras para otros usus, como por ejemplo: La
            agricultura, ganaderia, urbanización, entre otros.
          </p>
          <p>
            Este proceso implica la perdida de árboles y vegetación, lo que
            afecta significativamente el equilibrio ecologico.
          </p>
          <button className="button-home" onClick={handleDeforestationClick}>
            Mas información
          </button>
        </div>
        <div className="item-soilErosion">
          <h2> Que es la Erosión del suelo</h2>
          <p>
            La erosión del suelo es la degradación de la capa superficial del
            suelo, que es rica en nutrientes y esencial para el crecimiento de
            las plantas. Este proceso puede ser acelerado por activididaes
            humanas como la deforestación, la agricultura intensiva y la
            construcción.{" "}
          </p>
          <button className="button-home" onClick={handleSoilErosionClick}>
            Mas información
          </button>
        </div>
      </div>
      <Suspense fallback={<div>Cargando escena 3D...</div>}>
        <Canvas
          camera={{ fov: 49, position: [10, 10, 0.5] }}
          onClick={handleSound}
          gl={{
            antialias: false,
          }}
        >
          <OrbitControls />
          <Sky sunPosition={[100, 10, 100]} />
          <Lights />
          <ExampleModel />
          <Butterfly />
          <PostProcessing />
          {/* <Video name="nature" position-y={10} scale={10} /> */}
          <group position={[0, 5, 0]}>
            <PositionalAudio
              ref={audioRef}
              url="sounds/uccelli-canto-6-am.mp3"
              distance={3}
            />
          </group>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Home;
