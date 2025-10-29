import "react";
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";

const Reset = ({ setFormData }) => {
  const handleChangeReset = () => {
    setFormData({
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
  };

  return <button onClick={handleChangeReset}>Limpiar formulario</button>;
};

export default Reset;
