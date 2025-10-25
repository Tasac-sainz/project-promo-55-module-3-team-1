import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";
import ProjectPreview from "../components/ProjectPreview";
import "../styles/app.css";
import "../index.css";

const HomePage = () => {
  const navigate = useNavigate();
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

  const getNextId = () => {
    const lastId = parseInt(localStorage.getItem("lastProjectId")) || 0;
    const nextId = lastId + 1;
    localStorage.setItem("lastProjectId", nextId);
    return nextId;
  };
  const handleCreateProject = () => {
    const newProject = {
      ...formData,
      id: getNextId().toString(),
    };

    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...storedProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    navigate("/project-list");
  };

  return (
    <>
      <Header />
      <Buttons to="/project-list">Ver Proyectos</Buttons>
      <ProjectPreview formData={formData} />
      <Form formData={formData} setFormData={setFormData} />
      <button onClick={handleCreateProject}>Crea tu proyecto</button>
      <Footer />
    </>
  );
};

export default HomePage;
