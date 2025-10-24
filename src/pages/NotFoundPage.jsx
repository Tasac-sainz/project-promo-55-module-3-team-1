import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import "../styles/app.css";
import "../styles/not-found.css";
import "../index.css";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="not-found">
        <p className="notfound-message">Esta página no existe</p>
        <Buttons to="/project-list">Ver Proyectos</Buttons>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
