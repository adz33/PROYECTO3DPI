import "./selectCharacter.css" //Se importa el archivo CSS para el estilo de la pagina de selección de personajes

//Se importan las bibliotecas necesarias de react y terceros
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Sky, Cloud, Clouds } from '@react-three/drei';
import { Container, Nav, Navbar,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cientific from "./Characters/Cientific";
import maleCharacter from "./Characters/maleCharacter";
import Environment from "./Environment/Environment";


//Se crea una función para cargar y rendereizar modelos a una escala determinada
function Model({ path }) {
const { scene } = useGLTF(path); //path: Ruta del modelo 3D
return <primitive object={scene} scale={0.18} />;
}

//Este componente se utiliza para la selección del personaje, aun no se encuentra activo
const SelectCharacter = () => {

    const [selectedCharacter, setSelectedCharacter] = useState(null);

const navigate = useNavigate();

const handleCharacterClick = (character) => 
    {
    setSelectedCharacter(character);
    // Removed onCharacterSelect(character) as it is not defined
    return character;
    }; 

const handleConfirmClick = () => {
    navigate("/level1", { state: { selectedCharacter } });
}



return (
    //Clase contenedor de la pagina para seleccionar personaje
    <div className="selectCharacter-content">
        <div>
            <Navbar className="navbar-selectCharacter" expand="lg">
                <Container>
                    {/* Barra de navegación */}
                    <Navbar.Brand href="/"> {/* marca para redireccionamiento a la pagina principal */}
                        {/* Logo de la empresa */}
                        <img
                            alt="Logo"
                            src="/images/Logo.svg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    {/* Barra de navegación principal */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* Collapse responsive */}
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
        <div className="">
            <div className="selectCharacter-div">
                <h1 className="h1-selectCharacter">
                    Selecciona tu Personaje
                </h1>
            </div>
            <div className="character-selection">
                <div className="character-container">
                    <div className="canvas-container" onClick={() => handleCharacterClick('Científico')}>
                        <Canvas camera={{ fov: 49, position: [0.5, 0.25, 0.5] }}>
                            <Sky sunPosition={[100, 10, 100]} />
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[2, 2, 2]} />
                            <Model path="/characters/Avatars/Cientific.glb" />
                        </Canvas>
                    </div>
                    <div className="canvas-container" onClick={() => handleCharacterClick('Ingeniero')}>
                        <Canvas camera={{ fov: 49, position: [0.5, 0.25, 0.5] }}>
                            <Sky sunPosition={[100, 10, 100]} />
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[2, 2, 2]} />
                            <Model path="/characters/Avatars/maleCharacter.glb" />
                        </Canvas>
                    </div>
                    <h2 className="h2-selectCharacter">
                        Científico
                    </h2>
                    <h2 className="h2-selectCharacter">
                        Ingeniero
                    </h2>
                </div>
            </div>
            <div className="selection-container">
                    <h2 className="h2-selectCharacter">Personaje seleccionado: {selectedCharacter}</h2>
                    <button className="button-characterSelection" onClick={handleConfirmClick}> Confirmar</button>
            </div>
        </div>
    </div>
);
};

export default SelectCharacter;