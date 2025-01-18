import React from "react";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skill-page">
      {/* Résumé Section */}
      <div className="resume-section">
        <h2>Résumé</h2>
        <p>
          Je suis un développeur fullstack passionné par les nouvelles
          technologies et l'apprentissage continu.
        </p>
      </div>

      {/* Technologie et outils de développement */}
      <div className="content-container">
        <div className="tech-section">
          <h2>Technologies et outils de développement</h2>
          <div className="tech-grid">
            <img
              src="https://img.icons8.com/color/48/000000/python.png"
              alt="Python"
            />
            <img
              src="https://img.icons8.com/office/48/000000/react.png"
              alt="React"
            />
            <img
              src="https://img.icons8.com/color/48/000000/django.png"
              alt="Django"
            />
            <img
              src="https://img.icons8.com/color/48/000000/php.png"
              alt="PHP"
            />
            <img
              src="https://img.icons8.com/color/48/000000/codeigniter.png"
              alt="CodeIgniter"
            />
            <img
              src="https://img.icons8.com/color/48/000000/nextjs.png"
              alt="Next.js"
            />
            <img
              src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              alt="VS Code"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mysql-logo.png"
              alt="MySQL"
            />
            <img
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt="Firebase"
            />
            <img
              src="https://img.icons8.com/color/48/000000/expo.png"
              alt="Expo"
            />
            <img
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="Git"
            />
            <img
              src="https://img.icons8.com/color/48/000000/figma.png"
              alt="Figma"
            />
            <img
              src="https://img.icons8.com/color/48/000000/xampp.png"
              alt="XAMPP"
            />
            <img
              src="https://img.icons8.com/color/48/000000/server.png"
              alt="WAMP"
            />
          </div>
        </div>

        {/* Parcours Scolaire */}
        <div className="education-section">
          <h2>Parcours Scolaire</h2>
          <div className="education-entry">
            <h3>Baccalauréat</h3>
            <p>Année : 2015</p>
            <p>Lieu : Lycée Général</p>
          </div>
          <div className="education-entry">
            <h3>Licence Professionnelle</h3>
            <p>Année : 2019</p>
            <p>Lieu : Université X</p>
          </div>
          <div className="education-entry">
            <h3>Master en Informatique</h3>
            <p>Année : 2022</p>
            <p>Lieu : Université Y</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h2>Contactez-moi</h2>
        <p>
          N'hésitez pas à me contacter pour toute question ou projet
          collaboratif.
        </p>
        <div className="footer-contact">
          <div className="contact-item">
            <img
              src="https://img.icons8.com/color/48/000000/phone.png"
              alt="Téléphone"
            />
            <span>+237 678 123 456</span>
          </div>
          <div className="contact-item">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
            />
            <span>@TallaDaryl</span>
          </div>
          <div className="contact-item">
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
            />
            <span>@TallaDaryl</span>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows="4" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </footer>
    </div>
  );
};

export default Skills;
