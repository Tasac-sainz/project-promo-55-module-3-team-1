import "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";   
import FormTextInputs from "./FormTextInputs";
import FormImage from "./FormImage";
// Importo las imgs del proyecto y autora por defecto porque se usarán para validar si el usuario no las ha cambiado:
import defaultProject from "../images/project.jpg";
import defaultAuthor from "../images/author.png";

const Form = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // Creo un estado para guardar los errores de cada campo
  const [globalError, setGlobalError] = useState(""); // Creo otro estado para el mensaje de error global que se mostrará cuando el usuario pulse en "Crear proyecto"
  
  const getNextId = () => {
    const lastId = parseInt(localStorage.getItem("lastProjectId")) || 0;
    const nextId = lastId + 1;
    localStorage.setItem("lastProjectId", nextId);
    return nextId;
  };
  
  // Creo la función para validar el formulario
  const validateForm = () => {
      const newErrors = {}; // Creo un objeto temporal donde se irán guardando los errores que haya

      // Validación  de los campos de texto
      if (!formData.nameProj.trim()) newErrors.nameProj = "Este campo es obligatorio";
      if (!formData.slogan.trim()) newErrors.slogan = "Este campo es obligatorio";
      if (!formData.repo.trim()) newErrors.repo = "Este campo es obligatorio";
      if (!formData.demo.trim()) newErrors.demo = "Este campo es obligatorio";
      if (!formData.techs.trim()) newErrors.techs = "Este campo es obligatorio";
      if (!formData.description.trim()) newErrors.description = "Este campo es obligatorio";
      if (!formData.owner.trim()) newErrors.owner = "Este campo es obligatorio";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Este campo es obligatorio";

      // Validación de las imágenes, si el usuario no sube sus imágenes y deja las predeterminadas le devuelve un mensaje de error
      if (formData.projectImage === defaultProject)
        newErrors.projectImage = "Sube una imagen del proyecto";
      if (formData.authorImage === defaultAuthor)
        newErrors.authorImage = "Sube una imagen de la autora";

      setErrors(newErrors); // Guardamos los errores

      // Mensaje global si hay algún error
      if (Object.keys(newErrors).length > 0) { // Object.keys(newErrors) devuelve un array con todos los errores, si hay al menos un error (length > 0) se muestra el mensaje global
        setGlobalError("Por favor, completa los campos");
      } else {
        setGlobalError(""); // Si no hay errores borramos el mensaje global
      }

      // Devuelve true si no hay errores
      return Object.keys(newErrors).length === 0; 
    };

  const handleCreateProject = () => {
    const isValid = validateForm(); // Primero llamo a validateForm() para que revise los campos
    if (!isValid) return; // Si el formulario no es válido, salimos de la función (return) y no se guarda el proyecto
    

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
      {/* Paso errors a los subcomponentes */}
      <FormTextInputs formData={formData} setFormData={setFormData} errors={errors}/>
      <FormImage formData={formData} setFormData={setFormData} errors={errors}/>
      <button onClick={handleCreateProject}>Crea tu proyecto</button>
      {/* Mensaje global debajo del botón */}
      {globalError && <p style={{ color: "red", marginTop: "10px" }}>{globalError}</p>}
    </div>
  );
};

export default Form;
