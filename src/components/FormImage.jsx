import React from "react";
import PropTypes from "prop-types";
import "../styles/form-image.css";

const FormImage = ({ setFormData, errors }) => {
  const handleImageUpload = (ev, type) => {
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          [type]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form__images">
      <div>
        <label htmlFor="projectImage" className="project-button">
          {" "}
          Subir foto del proyecto
        </label>
        {errors.projectImage && (
          <p style={{ color: "red", marginTop: "5px" }}>
            {errors.projectImage}
          </p>
        )}
        <input
          type="file"
          accept="image/*"
          id="projectImage"
          onChange={(e) => handleImageUpload(e, "projectImage")}
        />
      </div>

      <div>
        <label htmlFor="authorImage" className="author-name">
          {" "}
          Subir foto de la autora
        </label>
        {errors.authorImage && (
          <p style={{ color: "red", marginTop: "5px" }}>{errors.authorImage}</p>
        )}
        <input
          type="file"
          accept="image/*"
          id="authorImage"
          onChange={(e) => handleImageUpload(e, "authorImage")}
        />
      </div>
    </div>
  );
};

FormImage.propTypes = {
  setFormData: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    projectImage: PropTypes.string,
    authorImage: PropTypes.string,
  }).isRequired,
};

export default FormImage;
