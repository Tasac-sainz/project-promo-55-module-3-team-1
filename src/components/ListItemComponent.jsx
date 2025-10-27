import "react";
import browser from "../images/browser.png";
import github from "../images/github.png";
import PropTypes from "prop-types";

const ListItemComponent = ({ project, hiddenclass, card }) => {
  console.log("project:", project);

  return (
    <>
      <img
        src={project.projectImage}
        alt="project photo"
        className={`image-project ${hiddenclass}`}
      />

      <li key={project.id} className={`card-project ${card}`}>
        <div className="owner-data">
          <img
            src={project.authorImage}
            alt="owner photo"
            className="owner-photo"
          />
          <p className="p-jobtitle">{project.jobTitle}</p>
          <p className="p-project-owner">{project.owner} </p>
        </div>
        <div className="project-data">
          <p className="project-title">{project.nameProj}</p>
          <p className="project-slogan">{project.slogan} </p>
          <p className="project-description">{project.description} </p>
          <div className="project-techs">
            <p className="techs-p">{project.techs}</p>
            <div className="techs-logo">
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
          </div>
        </div>
      </li>
    </>
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
