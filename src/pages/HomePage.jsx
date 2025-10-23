import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";
import "../styles/app.css";
import "../index.css";

const HomePage = () => {
  const [formData, setFormData] = useState({
    nameProj: "",
    slogan: "",
    repo: "",
    demo: "",
    techs: "",
    description: "",
    photo: "",
    owner: "",
    jobTitle: "",
    projectImage: defaultProject,
    authorImage: defaultAuthor,
  });

  return (
    <>
      <Header />
      <Buttons to="project-list">Ver Proyectos</Buttons>
      <Form formData={formData} setFormData={setFormData} />
      <Footer />
    </>
  );
};

export default HomePage;
