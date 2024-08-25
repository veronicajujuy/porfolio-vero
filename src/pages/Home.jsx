import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Bienvenidos a mi Porfolio!!</h1>
      <h2>Sobre mí</h2>
      <div className="bienvenidos">
        <h3>
          Mi nombre es Verónica Valdez, soy Desarrolladora Full Stack, Analista
          Programadora Universitaria y Docente
        </h3>
        <p>
          Tengo mas de 5 años de experiencia en la enseñanza y es lo que hago
          actualmente. A lo largo de mi carrera, tuve la oportunidad de trabajar
          en una variedad de proyectos y ultimamente me estoy especializando en
          Java y Spring Boot, con un enfoque particular en la implementación de
          Spring Security para construir aplicaciones web seguras y escalables.
        </p>
        <p>
          Siempre me esforcé por mejorar en áreas donde inicialmente tenía menos
          experiencia. CSS es un buen ejemplo; a través de numerosos proyectos
          de práctica, pude transformar una debilidad en una fortaleza. Mi
          pasión por la tecnología y la enseñanza me impulsa a seguir
          aprendiendo y a buscar constantemente nuevas soluciones a los desafíos
          técnicos que enfrento.
        </p>
        <p>
          Como docente, disfruto compartiendo mi conocimiento y ayudando a otros
          a alcanzar su potencial. Mi enfoque está basado en la convicción de
          que nunca se debe dejar de aprender y que siempre hay una solución
          para cada problema.
        </p>
        <p>
          Aca puedes encontrar diversos proyectos desarrollados, de frontend,
          backend, y otras cosas!!
        </p>
      </div>
      <h2>Soluciones Desarrolladas</h2>
      <div className="bienvenidos">
        <h3>
          Problema: Mas de 100 repositorios de alumnos para chequear, y ver si
          al menos cuentan con commits
        </h3>
        <p>
          Para chequear mas rápidamente los repositorios, desarrollé
          <strong>Comprobando Repositorios</strong>, una herramienta
          automatizada para verificar el estado de los repositorios de GitHub de
          estudiantes, la cual está desplegada en AWS Lightsail. La misma
          permite cargar una lista .csv y chequea si el repositorio existe,
          cuantos commits tiene y lista las branches
        </p>
        <h3>
          Problema: El sistema para tomar asistencia tiene botones para chequear
          si el alumno esta presente o no. Tuve 5 o mas grupos a la vez, y tenia
          que ponerles presente todos los días.
        </h3>
        <p>
          Para ello creé una extensión de Chrome llamada{" "}
          <strong> Tomar Asistencia </strong>, que facilita la gestión de
          asistencia en el sistema de mi empresa y está disponible en la Chrome
          Web Store. Use técnicas de web scraping para poner subir el listado
          que brinda zoom, y valiendome de las herramientas que proporciona
          chrome, filtrar los estudiantes por mails y pintar aquellos que estan
          presentes, lo que facilita pinchar la casilla de asistencia.
        </p>
      </div>
      <h2>Tecnologias con las que trabajo</h2>
      <div className="bienvenidos">
        <ol>
          <li>
            Lenguajes y Frameworks: Java, Spring Boot, Spring Security, React,
            Redux, JavaScript, HTML, CSS, Node.js
          </li>
          <li>Bases de Datos: MySQL</li>
          <li>Despliegue: AWS Lightsail, Railway</li>
          <li>
            Herramientas y Otros: GitHub API, Chrome Extensions, Bootstrap,
            React Router
          </li>
        </ol>
      </div>
      <Link to="/projects">Ver mis proyectos</Link>
    </section>
  );
}

export default Home;
