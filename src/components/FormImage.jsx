import React from "react";
import PropTypes from "prop-types";
import "../styles/form-image.css";

const FormImage = ({ setFormData }) => {
  const handleImageUpload = (ev, type) => {
    const file = ev.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        [type]: imageURL,
      }));
    }
  };

  return (
    <div className="form__images">
      <div>
        <label htmlFor="projectImage" className="project-button">
          {" "}
          Subir foto del proyecto
        </label>
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

export default FormImage;
