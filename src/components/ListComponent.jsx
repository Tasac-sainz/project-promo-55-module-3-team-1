import "react";
import ListItemComponent from "./ListItemComponent";
import { Link } from "react-router-dom";

const ListComponent = ({ projects, hiddenclass }) => {
  return (
    <ul className="li-container">
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

export default ListComponent;
