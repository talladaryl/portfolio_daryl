import React from "react";
import "./Accueil.css";
import darylImage from "../assets/images/daryl.jpg"; // Chemin mis à jour

const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="overlay">
        <div className="text-content">
          <h1>I'm TALLA Daryl</h1>
          <p>développeur FullStack.</p>
        </div>
      </div>
      <img
        src={darylImage} 
        alt="Background"
        className="background-image"
      />
    </div>
  );
};

export default Accueil;
