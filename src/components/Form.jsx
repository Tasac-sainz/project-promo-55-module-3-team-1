import "react";
import { useNavigate } from "react-router-dom";
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";

const Form = ({ formData, setFormData }) => {
  const navigate = useNavigate();
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

  console.log(formData);
  return (
    <div className="form__inputs">
      <FormTextInputs formData={formData} setFormData={setFormData} />
      <FormImage formData={formData} setFormData={setFormData} />
      <button onClick={handleCreateProject}>Crea tu proyecto</button>
    </div>
  );
};

export default Form;
