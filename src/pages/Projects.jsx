import ProjectCard from "../components/ProjectCard";
import ProjectsFront from "../components/ProjectsFront";

function Projects() {
  const projects = [
    {
      title: "Air Stay",
      description:
        "Clon de AirBnB, en la cual trabaje desarrollando parte del FrontEnd",
      link: "https://www.youtube.com/watch?v=CK5NVuKSqEU",
      image:
        "https://github.com/veronicajujuy/c14-01-m-node-react/raw/main/frontend/public/Captura%20de%20pantalla%202023-11-01%20114137.png",
      github: "https://github.com/veronicajujuy/c14-01-m-node-react",
      tecnologias: "React, Redux, React Router, Bootstrap",
      deployed: true,
      observaciones:
        "Este proyecto fue desarrollado en conjunto con 4 desarrolladores mas, en el termino de 4 semanas",
    },
    {
      title: "Comprobando Repositorios",
      description:
        "Es una aplicación diseñada para verificar automáticamente el estado de los repositorios de GitHub de los estudiantes en un curso. La aplicación permite cargar un archivo CSV con las URLs de los repositorios de los alumnos y realiza varias comprobaciones sobre cada repositorio.",
      link: "http://44.211.56.66/",
      image:
        "https://github.com/veronicajujuy/check-correccion-front/raw/main/repositorios.png",
      github:
        "https://github.com/veronicajujuy/check-correccion-front/tree/main",
      tecnologias: "React, React Router, Bootstrap, Node, Github API",
      deployed: true,
      observaciones: "Deployado en AWS Lightsail",
    },
    {
      title: "Tomar Asistencia",
      description:
        "Esta extensión sirve para tomar asistencia en el sistema de SMS de Digital House. Solo es de uso interno.",
      link: "https://chromewebstore.google.com/detail/tomar-asistencia/npbpmmcohmgikffmdgdnogppibioelbg?hl=es",
      image:
        "https://github.com/veronicajujuy/ecommerce-front-compumundo/blob/main/tomarasistencia.png?raw=true",
      github: "https://github.com/veronicajujuy/extension",
      tecnologias: "HTML, CSS, Javascript",
      deployed: true,
      observaciones: "Se encuentra disponible en la Chrome Web Store",
    },
    {
      title: "Clinica Odontologica",
      description:
        "Este proyecto fue desarrollado como practica para la materia Backend I, de la Carrera CTD, de la cual soy docente. En el frontend solo se puede ver el crud de Odontologos, pero están disponibles los endpoints de Pacientes, Turnos y Especialidades",
      link: "https://javadeploy-production.up.railway.app/",
      image:
        "https://github.com/veronicajujuy/ecommerce-front-compumundo/blob/main/clinica.png?raw=true",
      github: "https://github.com/veronicajujuy/java_deploy",
      tecnologias:
        "Backend: Java, Springboot, MySQL, FrontEnd: JavaScript, HTML, CSS",
      deployed: true,
      observaciones:
        "Si bien tiene un pequeño front end, este proyecto se basa casi enteramente en el Backend. Se encuentra deployado en Railway",
    },
    // Otros proyectos
  ];

  return (
    <>
      <section>
        <h1>Mis proyectos</h1>
        <div className="project-flex">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <section>
        <h1>Proyectos de FrontEnd</h1>
        <ProjectsFront />
      </section>
    </>
  );
}

export default Projects;
