import "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Adalab from "../images/logo-adalab.webp";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="home-link">
          <div className="header-left">
            <img src={Logo} alt="Logo" />
            <p className="home-text">Proyectos molones</p>
          </div>
        </Link>
        <img src={Adalab} alt="Adalab" className="adalab-logo" />
      </div>
      <div className="header-text">
        <h1>Proyectos Molones</h1>
        <p>Escaparate en línea para recoger ideas a través de la tecnología</p>
      </div>
    </>
  );
};

export default Header;
