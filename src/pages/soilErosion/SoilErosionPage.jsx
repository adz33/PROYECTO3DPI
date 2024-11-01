import "./SoilErosionPage.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";


function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={0.5} />;
}

const SoilErosionPage = () => {
  // Estado para controlar la visibilidad del modelo 3D
  const [isModelVisible, setIsModelVisible] = useState(false);

  // Función para manejar el clic en la imagen
  const handleImage = () => {
    setIsModelVisible(true); // Cambia el estado para mostrar el modelo 3D
  };

  return (
    <div>
      <div className="SoilErosionPage-Navbar">
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              {" "}
              {/* Cambié a una ruta real */}
              <img
                alt=""
                src="/src/assets/SVG/Recurso 9.svg"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="/Home" className="nav-link">
                  {" "}
                  {/* Usamos to en lugar de href */}
                  Erosión del Suelo
                </NavLink>
                <NavLink to="/Quiz" className="nav-link">
                  {" "}
                  {/* Redirige a la página del Quiz */}
                  Volver al Juego
                </NavLink>
              </Nav>
              <Nav className="ms-auto">
                <NavLink to="/Login" className="nav-link">
                  {" "}
                  {/* Redirige a la página de Login */}
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
              src="src/pages/soilErosion/images/jpg/erosionSuelo.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src/pages/soilErosion/images/jpg/DegradacionSuelo.jpg"
              // Maneja el clic en esta imagen
              alt="Erosión del Suelo"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <img
          className="d-block w-100"
          src="src/pages/soilErosion/images/jpg/CausasConsecuencias.jpg"
          onClick={handleImage}
          alt=""
        />
      </div>

      <Canvas>
        <OrbitControls enableZoom={false} />
        <Model path="models-3D/branches-medium.glb" />
      </Canvas>

      <div className="SoilErosionPage-combat">
        <img
          src="/src/pages/deforestation/images/svg/combatirDeforestacion.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SoilErosionPage;
