import "react";
import ListItemComponent from "./ListItemComponent";

const ListComponent = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => {
        return <ListItemComponent project={project} />;
      })}
    </ul>
  );
};

export default ListComponent;
