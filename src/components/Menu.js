// src/components/Menu.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <ul className="menu-item">
          <li>Accueil</li>
          <li>A propos</li>
          <li>Services</li>
          <li>Compétences</li>
        </ul>
        <div className="menu-search">
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher..."
          />
        </div>
        <div className="menu-socials">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaWhatsapp className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
