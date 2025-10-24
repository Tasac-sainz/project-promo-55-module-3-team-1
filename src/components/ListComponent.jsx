import "react";
import ListItemComponent from "./ListItemComponent";
import { Link } from "react-router-dom";

const ListComponent = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => {
        return (
          <Link to={`/your-project/${project.id}`} key={project.id}>
            <ListItemComponent project={project} />
          </Link>
        );
      })}
    </ul>
  );
};

export default ListComponent;
