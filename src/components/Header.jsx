import "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import Adalab from "./assets/adalab.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Link to="/">
          <div>
            <img src={Logo} alt="Logo" />
            <p>Proyectos molones</p>
          </div>
        </Link>
        <img src={Adalab} alt="Adalab" />
      </div>
      <div className="header-text">
        <h1>Proyectos Molones</h1>
        <h2>
          Escaparate en línea para recoger ideas a través de la tecnología
        </h2>
      </div>
    </>
  );
};

export default Header;
