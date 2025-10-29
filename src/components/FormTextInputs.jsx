import "react";
import PropTypes from "prop-types";
import "../styles/form-text.css";

const FormTextInputs = ({ setFormData, formData, errors }) => {
  const handleChangeInput = (ev) => {
    setFormData((currentState) => ({
      ...currentState,
      [ev.target.name]: ev.target.value,
    }));
  };

  return (
    <>
      <div className="project__form">
        <h1>Información</h1>
        <h3>Cuéntanos sobre el proyecto</h3>

        <input
          name="nameProj"
          id="project-name"
          placeholder={
            errors.nameProj ? errors.nameProj : "Nombre del proyecto"
          }
          value={formData.nameProj}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
        />
        <input
          name="slogan"
          id="slogan"
          placeholder={errors.slogan ? errors.slogan : "Slogan"}
          value={formData.slogan}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
        />
        <div className="repo-demo">
            <input
            name="repo"
            id="repo"
            placeholder={errors.repo ? errors.repo : "Repositorio"}
            value={formData.repo}
            onChange={handleChangeInput}
            className={`repo ${errors.nameProj ? "input-error-placeholder" : ""}`}
          />
          <input
            name="demo"
            id="demo"
            placeholder={errors.demo ? errors.demo : "Demo"}
            value={formData.demo}
            onChange={handleChangeInput}
            className={`demo ${errors.nameProj ? "input-error-placeholder" : ""}`}
          />
        </div>
        <input
          name="techs"
          id="techs"
          placeholder={errors.techs ? errors.techs : "Tecnologías"}
          value={formData.techs}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
        />
        <textarea
          name="description"
          id="description"
          placeholder={errors.description ? errors.description : "Descripción"}
          value={formData.description}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
        />
      </div>

      <div className="owner__form">
        <h3>Cuéntanos sobre la autora</h3>

        <input
          name="owner"
          id="owner"
          placeholder={errors.owner ? errors.owner : "Nombre"}
          value={formData.owner}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
        />
        <input
          name="jobTitle"
          id="jobTitle"
          placeholder={errors.jobTitle ? errors.jobTitle : "Trabajo"}
          value={formData.jobTitle}
          onChange={handleChangeInput}
          className={errors.nameProj ? "input-error-placeholder" : ""}
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
  errors: PropTypes.shape({
    nameProj: PropTypes.string,
    slogan: PropTypes.string,
    repo: PropTypes.string,
    demo: PropTypes.string,
    techs: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    jobTitle: PropTypes.string,
  }).isRequired,
};

export default FormTextInputs;
