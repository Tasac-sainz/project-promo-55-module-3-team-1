import { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";
import ProjectPreview from "../components/ProjectPreview";
import "../index.css";

const HomePage = () => {
  const [formData, setFormData] = useState({
    nameProj: "",
    slogan: "",
    repo: "",
    demo: "",
    techs: "",
    description: "",
    owner: "",
    jobTitle: "",
    projectImage: defaultProject,
    authorImage: defaultAuthor,
  });

  return (
    <>
      <Header />
      <div className="button-container">
        <Buttons to="/project-list">Ver Proyectos</Buttons>
      </div>
      <div className="data-container">
        <ProjectPreview project={formData} />
        <Form formData={formData} setFormData={setFormData} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
