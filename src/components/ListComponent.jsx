import "react";
import ListItemComponent from "./ListItemComponent";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListComponent = ({ projects, hiddenclass }) => {
  return (
    <ul className="main-container">
      {projects.map((project) => {
        return (
          <Link
            to={`/your-project/${project.id}`}
            key={project.id}
            className="project-link"
          >
            <ListItemComponent project={project} hiddenclass={hiddenclass} />
          </Link>
        );
      })}
    </ul>
  );
};

ListComponent.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  hiddenclass: PropTypes.string,
};

export default ListComponent;
