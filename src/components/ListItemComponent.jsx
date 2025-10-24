import "react";
import browser from "../images/browser.png";
import github from "../images/github.png";
import PropTypes from "prop-types";

const ListItemComponent = ({ project }) => {
  console.log("project:", project);

  return (
    <li key={project.id}>
      <div className="list-component-container">
        <div className="owner-data">
          <img src={project.projectImage} alt="project photo" />
          <img src={project.authorImage} alt="owner photo" />
          <p>{project.jobTitle}</p>
          <h3>{project.owner} </h3>
        </div>
      </div>
      <div className="projetc-data">
        <h3>{project.nameProj}</h3>
        <h4>{project.slogan} </h4>
        <p>{project.description} </p>
        <p>{project.techs}</p>
        <img
          className="logo-prj"
          src={browser}
          href={project.demo}
          alt="web site"
        />
        <img
          className="logo-prj"
          src={github}
          href={project.repo}
          alt="repo site"
        />
      </div>
    </li>
  );
};

ListItemComponent.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
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
};

export default ListItemComponent;
