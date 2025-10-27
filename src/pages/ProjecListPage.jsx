import { useEffect, useState } from "react";
import ListComponent from "../components/ListComponent";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import defaultAuthor from "../images/author.png";
import "../styles/projectlist.css";

const ProjecListPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const allProjects = [...staticProjects, ...storedProjects];
    setProjects(allProjects);
  }, []);

  const staticProjects = [
    {
      id: "1",
      nameProj: "Invite Me",
      slogan: "Diseña invitaciones únicas y creativas para tus eventos",
      repo: "https://github.com/Rosana-Moya/project-promo55-modulo-2-team-1",
      demo: "https://rosana-moya.github.io/project-promo55-modulo-2-team-1/index.html",
      techs: "JavaScript, HTML y CSS",
      description:
        "Invite Me es una aplicación web interactiva diseñada para permitir a los usuarios crear, visualizar y gestionar información en tiempo real",
      authorImage: defaultAuthor,
      owner: "Equipo 1 del módulo 3 de la 55 Promoción en Adalab",
      jobTitle: "Developer Full Stack",
    },
    {
      id: "2",
      nameProj: "Generador de firma",
      slogan: "Crea una vez tu firma y aplícala dónde tú quieras",
      repo: "https://github.com/",
      demo: "https://github.com/",
      techs: "JavaScript, HTML y CSS",
      description:
        "Se trata de una plataforma web para crear firmas que podrán aplicarse en correos electrónicos, documentos, etc. ",
      authorImage: defaultAuthor,
      owner: "Equipo X del módulo 3 de la 55 Promoción en Adalab",
      jobTitle: "Developer Full Stack",
    },
    {
      id: "3",
      nameProj: "Somos familia",
      slogan: "Nuestros peluditos también son familia!!",
      repo: "https://github.com/Tasac-sainz/somosfamilia",
      demo: "https://tasac-sainz.github.io/somosfamilia/",
      techs: "JavaScript, HTML y CSS",
      description:
        "Se trata de una web cuyo objetivo es crear conciencia y empatía acerca del papel que los animales juegan en nuestra vida, así como ofrecer veterinarios cuyo factor común sea el trato amable y respetuoso",
      authorImage: defaultAuthor,
      owner: "Tasac-sainz",
      jobTitle: "Developer Full Stack",
    },
    {
      id: "4",
      nameProj: "Buscardor de personajes de Harry Potter",
      slogan: "El mundo de Howarts en la palma de tu mano!",
      repo: "https://github.com/",
      demo: "https://github.com/",
      techs: "React, JavaScript, HTML y CSS",
      description:
        "Con esta web puedes encontrar el listado de personajes de la saga Harry Potter con descripciones precisas de cada uno",
      authorImage: defaultAuthor,
      owner: "Promo 55 Adalab - Módulo 3",
      jobTitle: "Developer Full Stack",
    },
  ];

  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/">Nuevo proyecto</Buttons>
      </div>
      <ListComponent projects={projects} hiddenclass="hidden" card="card" />
      <Footer />
    </>
  );
};

export default ProjecListPage;
