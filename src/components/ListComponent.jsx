import "react";
import ListItemComponent from "./ListItemComponent";
import { Link } from "react-router-dom";
import "../styles/projectlist.css";

const ListComponent = ({ projects }) => {
  return (
    <ul className="li-container">
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
