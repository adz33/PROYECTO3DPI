import "./SoilErosion.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna
import EarthPage from "../../components/ErarthPage/EarthPage";
import HouseCan from "../../components/ErarthPage/HouseCan";

const SoilErosion = () => {
  return (
    <div>
      <div className="deforestation-Navbar">
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              {" "}
              {/* Cambié a una ruta real */}
              <img
                alt=""
                src="/images/Logo.svg"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink to="/Deforestation" className="nav-link">
                  {" "}
                  {/* Usamos to en lugar de href */}
                  Deforestación
                </NavLink>
                <NavLink to="/selectCharacter" className="nav-link">
                  {" "}
                  {/* Redirige a la página del Quiz */}
                  Experiencia Interactiva
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
              src="images/soilErosion/slides/slide-1.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/soilErosion/PNG/Frame 22.png"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <img
          className="d-block w-100"
          src="images/soilErosion/PNG/Recurso 18.png"
          alt=""
        />
      </div>
      <div>
        <img className="d-block w-100" src="" alt="" />
        <EarthPage />
      </div>
      <div>
        <img
          className="d-block w-100"
          src="images/soilErosion/PNG/Frame 26.png"
          alt=""
        />
      </div>
      <HouseCan />
    </div>
  );
};

export default SoilErosion;
