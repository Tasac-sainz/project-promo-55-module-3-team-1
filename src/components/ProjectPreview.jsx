import "react";
import "../styles/projectpreview.css";
import browserIcon from "../images/browser.png";
import githubIcon from "../images/github.png";


const ProjectPreview = ({ formData }) => {
    return (
        // PREVIEW DEL PROYECTO
        <div className="project-preview__container">
        <img className="project-photo" alt="Imagen del proyecto"/>
            <div className="project__card-preview">
                <div className="photo-column">
                    <img className="owner-photo" alt="Imagen de la autora"></img>
                    <p className="job-title">{formData.jobTitle || "Full Stack Developer"}</p>
                    <p className="owner-name">{formData.owner || "Emmelie Björklund"}</p>
                </div>

                <div className="input-column">
                    <h3>Personal Project Card</h3>
                    <p className="nameProj">{formData.nameProj || "Elegant Workspace"}</p>
                    <p className="slogan">{formData.slogan || "Diseños Exclusivos"}</p>
                    <p className="description">{formData.description || "Descripción del proyecto"}</p>
                    <p className="techs">{formData.techs || "React JS - HTML - CSS"}</p>
                    <div className="icons">
                        <a className="repo" href={formData.repo}>
                            <img src={browserIcon}/>
                        </a>
                        <a className="repo" href={formData.demo}>
                            <img src={githubIcon}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPreview;

// TODO: AÑADIR 
// <img src={formData.projectImage} alt=“Imagen del proyecto” />
// <img src={formData.authorImage} alt=“Imagen de la autora” />

