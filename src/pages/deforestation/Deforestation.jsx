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
            </div>
            <div>
                <Carousel >
                    <Carousel.Item>
                    <img
                            className="d-block w-100"
                            src="/src/assets/PNG/slide1-deforestation.png"
                            />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/assets/PNG/slide2-deforestation.png"
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
                ¿Cómo combatir la deforestación?
                </h2>
                <ul>
                    <li>
                        Reforestación y restauración de bosques: Plantar árboles en áreas afectadas y restaurar ecosistemas.
                    </li>
                    <li>
                        Uso sostenible de los recursos: Fomentar la gestión responsable de los bosques y la agricultura sostenible.
                    </li>
                    <li>
                        Conservación y protección de áreas verdes: Creación de reservas naturales y leyes que protejan los bosques.
                    </li>
                    <li>
                        Educación y concienciación: Informar a la sociedad sobre la importancia de los bosques y su conservación.
                    </li>
                    <li>
                        Consumo responsable: Optar por productos certificados que no fomenten la deforestación, como madera certificada y productos libres de aceite de palma no sostenible
                    </li>
                </ul>
            </div>
        </div>
        
        
    );
};

export default Deforestation;
