import "./selectCharacter.css"
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Container, Nav, Navbar,} from "react-bootstrap";
import { NavLink } from "react-router-dom";


function Model({ path }) {
const { scene } = useGLTF(path);
return <primitive object={scene} scale={0.18} />;
}

const SelectCharacter = ({ onCharacterSelect }) => {
const [selectedCharacter, setSelectedCharacter] = useState(null);

const handleCharacterClick = (character) => 
    {
    setSelectedCharacter(character);
    onCharacterSelect(character); // Llamada a función para pasar la selección
    }; 

const enginnerCharacter = () => {
    const meshRef = useRef();
}

    const cientificCharacter = () => {
        const meshRef = useRef();
    
    }

return (
    <div className="selectCharacter-content">
            <div>
            <Navbar className="navbar-selectCharacter" expand="lg">
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
                        <p className='nav-link'> Conoce mas acerca de: </p>
                        <NavLink to="/soilErosion" className="nav-link"> {/* Usamos to en lugar de href */}
                            Erosión del Suelo
                        </NavLink>
                        <NavLink to="/Deforestation" className="nav-link"> {/* Redirige a la página del Quiz */}
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
            </div >
        <div className="">
            <div className="selectCharacter-div">
                <h1 className="h1-selectCharacter">
                    Selecciona tu Personaje
                </h1>
            </div>
            <div className="character-selection">
                <div className="character-container">
                    <Canvas camera={{ fov: 49, position: [0.5, 0.25, 0.5] }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 2]} />
                        <Model path="/characters/Avatars/Cientific.glb" />
                    </Canvas>
                    <p className="p-character-container">Científico</p>
                    <Canvas camera={{ fov: 49, position: [0.5, 0.25, 0.5] }}>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 2, 2]} />
                        <Model path="/characters/Avatars/maleCharacter.glb" />
                    </Canvas>
                    <p className="p-character-container">Personaje Masculino</p>
                </div>

        </div>
        </div>
    </div>

);
};

export default SelectCharacter;
