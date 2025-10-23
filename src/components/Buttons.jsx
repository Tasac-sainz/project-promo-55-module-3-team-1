import "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/buttons.css";

const Buttons = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <button>{children}</button>
      </Link>
    </>
  );
};

Buttons.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Buttons;

// Cómo lo voy a usar
// <Buttons to="project-list">Ver Proyectos</Buttons>
// <Buttons to="/">Nuevo proyecto</Buttons>
// <Buttons to="your-project">Crea tu proyecto</Buttons>
