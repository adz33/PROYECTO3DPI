import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importamos NavLink para la navegación interna

const NavbarPage = () => {
    return (
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
                        <NavLink to="/Home" className="nav-link"> {/* Usamos to en lugar de href */}
                            Erosión del Suelo
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
    );
};

export default NavbarPage;
