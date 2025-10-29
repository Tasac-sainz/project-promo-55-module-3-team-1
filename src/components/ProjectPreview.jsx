import "react";
import "../styles/projectpreview.css";
import browserIcon from "../images/browser.png";
import githubIcon from "../images/github.png";
import PropTypes from "prop-types";

const ProjectPreview = ({ project }) => {
  return (
    <div className="project-preview__container">
      <img
        className="project-photo"
        src={project.projectImage}
        alt="Imagen del proyecto"
      />
      <div className="project__card-preview">
        <div className="photo-column">
          <img
            className="owner-photo"
            src={project.authorImage}
            alt="Imagen de la autora"
          ></img>
          <p className="job-title">
            {project.jobTitle || "Full Stack Developer"}
          </p>
          <p className="owner-name">{project.owner || "Emmelie Björklund"}</p>
        </div>

        <div className="input-column">
          <div className="title-line__container">
            <div className="line-1"></div>
            <h3>Personal Project Card</h3>
            <div className="line-2"></div>
          </div>
          <p className="nameProj">{project.nameProj || "Elegant Workspace"}</p>
          <p className="slogan">{project.slogan || "Diseños Exclusivos"}</p>
          <p className="description">
            {project.description || "Descripción del proyecto"}
          </p>
          <div className="techs-icons-container">
            <p className="techs">{project.techs || "React JS - HTML - CSS"}</p>
            <div className="icons">
              <a className="repo" href={project.repo}>
                <img src={browserIcon} />
              </a>
              <a className="repo" href={project.demo}>
                <img src={githubIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    projectImage: PropTypes.string,
    authorImage: PropTypes.string,
    jobTitle: PropTypes.string,
    owner: PropTypes.string,
    nameProj: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    techs: PropTypes.string,
    repo: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
};

export default ProjectPreview;
