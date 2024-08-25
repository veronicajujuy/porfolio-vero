import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <h1>Bienvenidos a mi Porfolio!!</h1>

      <h2>Sobre mí</h2>
      <img src="vero.jpg" alt="foto-vero" className="foto" />
      <div className="bienvenidos">
        <div className="quote">
          <p>
            <strong>
              "El mundo siempre parece más brillante cuando acabas de hacer algo
              que antes no estaba allí"
            </strong>
          </p>
          <p>Neil Gaiman</p>
        </div>
      </div>
      <div className="bienvenidos">
        <h3>
          Mi nombre es <span className="nombre"> Verónica Valdez</span>, soy
          Desarrolladora Full Stack, Analista Programadora Universitaria y
          Docente
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
          backend y algunas soluciones que tuve que implementar para mi trabajo,
          investigando y desarrollando con tecnologías que nunca había
          utilizado!!
        </p>
      </div>
      <h2>Soluciones Desarrolladas</h2>
      <div className="bienvenidos">
        <h3>
          Problema:
          <em>
            <span className="nombre">
              "Los profesores de la academia en la que trabajo tenían
              inconvenientes con el sistema de toma de asistencia online. Los
              profesores tardaban demasiado tiempo en marcar manualmente la
              asistencia y muchos tenían hasta hasta 5 grupos ( mas de 200
              personas ) al mismo tiempo"
            </span>
          </em>
        </h3>
        <p>
          ✔️ Solución: Desarrollé una extensión de Chrome llamada
          <strong> "Tomar Asistencia"</strong> diseñada para optimizar la
          gestión de la asistencia en el sistema de mi empresa. Esta
          herramienta, que actualmente está disponible en la Chrome Web Store,
          automatiza el proceso de marcar la presencia de los estudiantes,
          ahorrando tiempo y reduciendo errores. Utilicé herramientas y técnicas
          de web scraping para automatizar la recolección y análisis de datos de
          asistencia. Desarrollé un sistema de filtrado para identificar y
          resaltar automáticamente los correos electrónicos de los estudiantes
          presentes, simplificando la tarea de marcar la asistencia.
        </p>
        <h3>
          Problema:
          <em>
            <span className="nombre">
              "En una de las materias que dicté hace un par de años, era
              necesario revisar los repositorios de los los alumnos. Este
              trabajo se realizaba de manera manual y requeria chequear que los
              repositorios existieran y tuviesen commits. Tomaba casi 4 horas de
              revision por grupo de estudiantes, generalmente hasta 100
              repositorios revisados uno por uno."
            </span>
          </em>
        </h3>
        <p>
          ✔️ Solución: Para chequear mas rápidamente los repositorios,
          desarrollé
          <strong> "Comprobando Repositorios" </strong>, una herramienta
          automatizada para verificar el estado de los repositorios de GitHub de
          estudiantes, la cual está desplegada en AWS Lightsail. La misma
          permite cargar una lista .csv y chequea si el repositorio existe,
          cuantos commits tiene y lista las branches. Luego se puede descargar
          en .csv el listado chequeado. Con esta solucion se logró optimizar el
          tiempo de los profesores, a 5 minutos de revision por grupo.
        </p>
      </div>
      <h2>Tecnologias con las que trabajo</h2>
      <div className="bienvenidos">
        <ul>
          <li>
            Lenguajes y Frameworks: Java, Spring Boot, Spring Security, React,
            JavaScript, HTML, CSS, Node.js
          </li>
          <li>Bases de Datos: MySQL, Oracle, PostgreSQL</li>
          <li>Despliegue: AWS Lightsail, Railway, Vercel</li>
          <li>
            Herramientas y Otros: GitHub API, Chrome Extensions, Git, Linux,
            Docker
          </li>
        </ul>
      </div>
      <h3>
        <Link to="/projects">Ver mis proyectos</Link>
      </h3>
    </section>
  );
}

export default Home;
