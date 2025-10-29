import "react";
import browser from "../images/browser.png";
import github from "../images/github.png";
import PropTypes from "prop-types";

const ListItemComponent = ({ project }) => {
  console.log("project:", project);

  return (
    <div className="list-item__container">
      <li key={project.id} className="card-project">
        <div className="photo-column">
          <img
            src={project.authorImage}
            alt="owner photo"
            className="owner-photo"
          />
          <p className="job-title">{project.jobTitle}</p>
          <p className="owner-name">{project.owner} </p>
        </div>

        <div className="input-column">
          <div className="title-line__container">
            <div class="line-1"></div><h3>Personal Project Card</h3><div class="line-2"></div>
          </div>
          <p className="nameProj">{project.nameProj}</p>
          <p className="slogan">{project.slogan} </p>
          <p className="description">{project.description} </p>
          <div className="techs-icons-container">
            <p className="techs">{project.techs}</p>
            <div className="icons">
            <a className="repo" href={project.demo}>
              <img src={browser} alt="web site"/>
            </a>
            <a className="repo" href={project.repo}>
              <img src={github} alt="repo site"/>
            </a>
          </div>
          </div>
        </div>
      </li>
    </div>
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
