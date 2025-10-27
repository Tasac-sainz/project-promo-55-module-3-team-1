import "react";
import { useNavigate } from "react-router-dom";
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";
import PropTypes from "prop-types";
import "../styles/buttons.css";

const Form = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const handleCreateProject = () => {
    const newProject = {
      ...formData,
      id: (Math.floor(Math.random() * (100 - 6 + 1)) + 6).toString(),
    };

    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const updatedProjects = [...storedProjects, newProject];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));

    navigate("/project-list");
  };

  console.log(formData);
  return (
    <div className="form__inputs">
      <FormTextInputs formData={formData} setFormData={setFormData} />
      <FormImage formData={formData} setFormData={setFormData} />
      <div className="button-container">
        <button className="create-button" onClick={handleCreateProject}>
          Crea tu proyecto
        </button>
      </div>
    </div>
  );
};

Form.propTypes = {
  formData: PropTypes.shape({
    nameProj: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    projectImage: PropTypes.string.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
