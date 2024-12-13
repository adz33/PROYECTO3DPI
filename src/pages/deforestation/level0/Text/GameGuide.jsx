import "./GameGuide.css";
import React from "react";

const GameGuide = ({ onClose }) => {
    return (
        <div className="container-GameGuide">
            <img 
                src="/images/deforestation/initialMap/GuiaJuego.png"
                alt="GameGuide" 
                className="GameGuide" />
            <button onClick={onClose} className="close-button">Close</button>
        </div>
    );
}

export default GameGuide;