import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const Menu = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 4000); // 4 secondes de délai
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-content">
          <ul className="menu-item">
            <li onClick={() => handleMenuClick("/")}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li onClick={() => handleMenuClick("/about")}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                À propos
              </NavLink>
            </li>
            <li onClick={() => handleMenuClick("/services")}>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                Services
              </NavLink>
            </li>
            <li onClick={() => handleMenuClick("/skills")}>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                Compétences
              </NavLink>
            </li>
          </ul>

          <div className="menu-search">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
            />
          </div>

          <div className="menu-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <FaWhatsapp className="icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="icon" />
            </a>
          </div>
        </div>
      </div>

      {loading && (
        <div className="loading-screen">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
