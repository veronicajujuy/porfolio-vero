import { Link } from "react-router-dom";

function CardFront({ project }) {
  return (
    <div className="project-card2">
      <div className="project-image2">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
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
      </div>
    </div>
  );
}

export default CardFront;
