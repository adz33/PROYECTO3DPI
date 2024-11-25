import { Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna


const InGameNavBar = () => {
    return (
            <div>
                <div className="deforestation-Navbar">
                    <Navbar className="navbar" expand="lg">
                        <Container>
                            <Navbar.Brand href="/"> {/* Cambié a una ruta real */}
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
                            <p className='nav-link'> Conoce mas acerca de: </p>
                            <NavLink to="/soilErosion" className="nav-link"> {/* Usamos to en lugar de href para redireccinar, redirige a la pagina erosión del suelo */}
                                Erosión del Suelo
                            </NavLink>
                            <NavLink to="/Deforestation" className="nav-link"> {/* Redirige a la pagina deforestación */}
                                Deforestación
                            </NavLink>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link"> {/* Redirige a la página de Login */}
                                Home
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
    );
};

export default InGameNavBar;
