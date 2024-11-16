import "./movementGuide.css";
import React from "react";

const MovementGuide = ({ onClose }) => {
    return (
        <div className="container-movementGuide">
            <img 
                src="/images/deforestation/initialMap/movementGuide.svg"
                alt="movementGuide" 
                className="movementGuide" />
            <button onClick={onClose} className="close-button">Close</button>
        </div>
    );
}

export default MovementGuide;