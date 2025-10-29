import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import "../styles/not-found.css";
import "../index.css";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <p className="notfound-message">Esta página no existe</p>
          <div className="button-container">
            <Buttons to="/">Volver</Buttons>
            <Buttons to="/project-list">Ver Proyectos</Buttons>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
