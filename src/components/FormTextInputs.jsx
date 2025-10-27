import "react";
import PropTypes from "prop-types";
import "../styles/form-text.css";

const FormTextInputs = ({ setFormData, formData }) => {
  const handleChangeInput = (ev) => {
    setFormData((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <>
      {/* FORM DEL PROYECTO */}
      <div className="project__form">
        <h1>Información</h1>
        <h3>Cuéntanos sobre el proyecto</h3>

        <input
          name="nameProj"
          id="project-name"
          placeholder="Nombre del proyecto"
          value={formData.nameProj}
          onChange={handleChangeInput}
        />
        <input
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={formData.slogan}
          onChange={handleChangeInput}
        />
        <input
          name="repo"
          id="repo"
          placeholder="Repositorio"
          value={formData.repo}
          onChange={handleChangeInput}
        />
        <input
          name="demo"
          id="demo"
          placeholder="Demo"
          value={formData.demo}
          onChange={handleChangeInput}
        />
        <input
          name="techs"
          id="techs"
          placeholder="Tecnologías"
          value={formData.techs}
          onChange={handleChangeInput}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={handleChangeInput}
        />
      </div>

      {/* FORM DE LA AUTORA */}
      <div className="owner__form">
        <h3>Cuéntanos sobre la autora</h3>

        <input
          name="owner"
          id="owner"
          placeholder="Nombre"
          value={formData.owner}
          onChange={handleChangeInput}
        />
        <input
          name="jobTitle"
          id="jobTitle"
          placeholder="Trabajo"
          value={formData.jobTitle}
          onChange={handleChangeInput}
        />
      </div>
    </>
  );
};

FormTextInputs.propTypes = {
  formData: PropTypes.shape({
    nameProj: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    techs: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    authorImage: PropTypes.string,
    owner: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    projectImage: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default FormTextInputs;
