import "react";
import browser from "../images/browser.png";
import github from "../images/github.png";

const ListItemComponent = ({ project }) => {
  return (
    <li key={project.id}>
      <div className="list-component-container">
        <div className="owner-data">
          <img src={project.photo} alt="owner photo" />
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
export default ListItemComponent;
