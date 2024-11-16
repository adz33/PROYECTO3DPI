import "./deforestation.css";
import { Container, Nav, Navbar,Carousel} from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna


const Deforestation = () => {
    return (
            <div>
                <div className="deforestation-Navbar">
                    <Navbar className="navbar" expand="lg">
                        <Container>
                            <Navbar.Brand href="/home"> {/* Cambié a una ruta real */}
                                <img
                                    alt="Logo"
                                    src="/images/Logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                />{' '}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    
                                    <NavLink to="/soilErosion" className="nav-link"> {/* Usamos to en lugar de href */}
                                    Erosión del Suelo
                                    </NavLink>
                                    <NavLink to="/selectCharacter" className="nav-link"> {/* Redirige a la página del Quiz */}
                                    Deforestación
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
            </div>
    );
};

export default Deforestation;
