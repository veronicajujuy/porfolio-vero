import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Link to={project.github} target="_blank">
          <p>Link a github</p>
        </Link>
        <p>Tecnologias: {project.tecnologias}</p>
        {project.deployed ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="deployed-link"
          >
            Ver proyecto <span className="status-indicator">✔️</span>
          </a>
        ) : (
          <p className="deployed-link ">No deployado</p>
        )}
        <small>Observaciones: {project.observaciones}</small>
      </div>
    </div>
  );
}

export default ProjectCard;
