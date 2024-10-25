import "./soilErosion.css";
import { Container, Nav, Navbar,Carousel} from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna
import { div } from "three/webgpu";

const SoilErosion = () => {
    return (
        <div>
            <div className="deforestation-Navbar">
                            <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="/home"> {/* Cambié a una ruta real */}
                    <img
                        alt=""
                        src="/src/assets/SVG/Recurso 9.svg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/Deforestation" className="nav-link"> {/* Usamos to en lugar de href */}
                            Deforestación
                        </NavLink>
                        <NavLink to="/Quiz" className="nav-link"> {/* Redirige a la página del Quiz */}
                            Volver al Juego
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavLink to="/Login" className="nav-link"> {/* Redirige a la página de Login */}
                            Cerrar Sesión
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
            <div>
                <Carousel >
                    <Carousel.Item>
                    <img
                            className="d-block w-100"
                            src="/src/assets/PNG/Recurso 17.png"
                            />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/PNG/Recurso 18.png"
                            />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <img 
                className="d-block w-100"
                src="/src/assets/PNG/Recurso 14.png" 
                alt="" />
            </div>
            <div className="deforestation-combat">
                <h2 className="h2-deforestation">
                ¿Cómo combatir la Erosión del Suelo?
                </h2>
                <ul>
                    <li>
                    Reforestación: Plantar árboles y vegetación ayuda a estabilizar el suelo y reducir la erosión.
                    </li>
                    <li>
                    Técnicas de conservación del suelo: Prácticas como la labranza mínima, la
                    rotación de cultivos y el uso de coberturas vegetales pueden proteger el suelo.              </li>
                    <li>
                    Construcción de terrazas: En áreas montañosas, las terrazas pueden reducir la velocidad del agua y prevenir la erosión.
                    </li>
                    <li>
                    Control del agua: La construcción de canales y diques puede ayudar a
                    controlar el flujo de agua y reducir la erosión.
                    </li>
                    <li>
                    Educación y concienciación: Informar a las comunidades sobre la
                    importancia de la conservación del suelo y las prácticas sostenibles puede
                    tener un gran impacto.                    
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SoilErosion;
