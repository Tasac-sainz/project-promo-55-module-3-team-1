import "react";
import ListComponent from "../components/ListComponent";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ProjecListPage = () => {
  const staticProjects = [
    {
      id: 1,
      nameProj: "Invite Me",
      slogan: "Diseña invitaciones únicas y creativas para tus eventos",
      repo: "https://github.com/Rosana-Moya/project-promo55-modulo-2-team-1",
      demo: "https://rosana-moya.github.io/project-promo55-modulo-2-team-1/index.html",
      techs: "JavaScript, HTML y CSS",
      description:
        "Invite Me es una aplicación web interactiva diseñada para permitir a los usuarios crear, visualizar y gestionar información en tiempo real",
      photo: "",
      owner: "Equipo 1 del módulo 3 de la 55 Promoción en Adalab",
      jobTitle: "Developer Full Stack",
    },
    {
      id: 2,
      nameProj: "Generador de firma",
      slogan: "Crea una vez tu firma y aplícala dónde tú quieras",
      repo: "https://github.com/",
      demo: "https://github.com/",
      techs: "JavaScript, HTML y CSS",
      description:
        "Se trata de una plataforma web para crear firmas que podrán aplicarse en correos electrónicos, documentos, etc. ",
      photo: "",
      owner: "Equipo X del módulo 3 de la 55 Promoción en Adalab",
      jobTitle: "Developer Full Stack",
    },
    {
      id: 3,
      nameProj: "Ada Travel",
      slogan:
        "Turismo, aventura, diversión y descanso... vive tus mejores vacaciones",
      repo: "https://github.com/",
      demo: "rhttps://github.com/",
      techs: "HTML y CSS",
      description: "Es la web de una agencia de viajes",
      photo: "",
      owner: "AdaTravel",
      jobTitle: "Developer Frontend",
    },
    {
      id: 4,
      nameProj: "Somos familia",
      slogan:
        "Familia es quien está a tu lado, cada día... nuestros peluditos, también son familia",
      repo: "https://github.com/Tasac-sainz/somosfamilia",
      demo: "https://tasac-sainz.github.io/somosfamilia/",
      techs: "JavaScript, HTML y CSS",
      description:
        "Se trata de una web cuyo objetivo es crear conciencia y empatía acerca del papel que los animales juegan en nuestra vida, así como ofrecer veterinarios de confianza en la zona Norte de Madrid, cuyo factor común sea el trato amable y respetuoso",
      photo: "",
      owner: "Tasac-sainz",
      jobTitle: "Developer Full Stack",
    },
    {
      id: 5,
      nameProj: "Buscardor de personajes de Harry Potter",
      slogan: "El mundo de Howarts en la palma de tu mano!",
      repo: "https://github.com/",
      demo: "https://github.com/",
      techs: "React, JavaScript, HTML y CSS",
      description:
        "Con esta web puedes encontrar el listado de personajes de la saga Harry Potter con descripciones precisas de cada uno",
      photo: "",
      owner: "Promo 55 Adalab - Módulo 3",
      jobTitle: "Developer Full Stack",
    },
  ];

  return (
    <>
      <Header />
      <ListComponent projects={staticProjects} />;
    </>
  );
};

export default ProjecListPage;
