import "./home.css"
import React,{ useRef } from "react";
import { Container, Nav, Navbar,Carousel} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const handleDeforestationClick = () => {
        navigate("/deforestation");
    };

    const handleSoilErosionClick = () => {
        navigate("/soilErosion");
    };

    return (
        
        <div class='container-home' >
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
                                <NavLink to="/Login" className="nav-link"> {/* Usamos to en lugar de href para redireccinar, redirige a la pagina erosión del suelo */}
                                    Experiencia Interactiva
                                </NavLink>
                                <NavLink to="/soilErosion" className="nav-link"> {/* Usamos to en lugar de href para redireccinar, redirige a la pagina erosión del suelo */}
                                    Erosión del Suelo
                                </NavLink>
                                <NavLink to="/Deforestation" className="nav-link"> {/* Redirige a la pagina deforestación */}
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
            <div>
                <Carousel >
                    <Carousel.Item>
                    <img
                            className="d-block w-100"
                            src="/src/pages/home/slides/slide.jpg"
                            />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/src/pages/home/slides/slide-1.jpg"
                            />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row">
                <div className="item-deforestation">
                    <h2> Que es la deforestación</h2>
                    <p>La deforestación es la eliminación de bosques o áreas verdes, trasformando estas tierras para otros usus,
                        como por ejemplo: La agricultura, ganaderia, urbanización, entre otros.
                    </p>
                    <p>Este proceso implica la perdida de árboles y vegetación, lo que afecta significativamente el equilibrio ecologico.</p>
                    <button className="button-home" onClick={handleDeforestationClick}>Mas información</button>
                </div>
                <div className="item-soilErosion">
                    <h2> Que es la Erosión del suelo</h2>
                    <p>La erosión del suelo es la degradación de la capa superficial del suelo, que es rica en nutrientes y esencial para el crecimiento
                        de las plantas. Este proceso puede ser acelerado por activididaes humanas como la deforestación, la agricultura intensiva y la construcción. </p>
                        <button className="button-home" onClick={handleSoilErosionClick}>Mas información</button>
                </div>
            </div>
        </div>

    );

};

export default Home;