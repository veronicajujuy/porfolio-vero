import CardFront from "./CardFront";
const projects = [
  {
    title: "Intro component using react js and formik",

    link: "https://intro-component-wheat.vercel.app/",
    image:
      "https://github.com/veronicajujuy/intro-component/raw/main/imagenes/desktop.png",
    github: "https://github.com/veronicajujuy/intro-component",
    tecnologias: "React, HTML, CSS",
    deployed: true,
    observaciones: "",
  },
  {
    title: "Web Grover Groceries",

    link: "https://pagina-grover.vercel.app/",
    image:
      "https://github.com/veronicajujuy/pagina-grover/raw/main/pagina_grover.jpg",
    github: "https://github.com/veronicajujuy/pagina-grover",
    tecnologias: "React, HTML, CSS",
    deployed: true,
    observaciones: "",
  },
  {
    title: "Product Card Component",

    link: "https://product-card-component-six.vercel.app/",
    image:
      "https://github.com/veronicajujuy/product-card-component/raw/main/images/imagen-desktop.PNG",
    github: "https://github.com/veronicajujuy/product-card-component",
    tecnologias: "HTML, CSS",
    deployed: true,
    observaciones: "",
  },
  {
    title: "Huddle landing page",

    link: "https://huddle-landing-page-two-silk.vercel.app/",
    image:
      "https://github.com/veronicajujuy/Huddle-Landing-Page/raw/main/images/image-laptop.png",
    github: "https://github.com/veronicajujuy/Huddle-Landing-Page",
    tecnologias: "HTML, CSS",
    deployed: true,
    observaciones: "",
  },
  {
    title: "Four card feature section",
    description:
      "Clon de AirBnB, en la cual trabaje desarrollando parte del FrontEnd",
    link: "https://four-card-feature-eta-five.vercel.app/",
    image:
      "https://github.com/veronicajujuy/Four-card-feature/raw/main/images/Captura-laptop.PNG",
    github: "https://github.com/veronicajujuy/Four-card-feature",
    tecnologias: "HTML, CSS",
    deployed: true,
    observaciones: "",
  },
  {
    title: "Clipboard Landing Page",
    description:
      "Clon de AirBnB, en la cual trabaje desarrollando parte del FrontEnd",
    link: "https://cipboard-landing-page-ten.vercel.app/",
    image:
      "https://github.com/veronicajujuy/cipboard-landing-page/raw/main/images/captura-laptop.PNG",
    github: "https://github.com/veronicajujuy/cipboard-landing-page",
    tecnologias: "HTML, CSS",
    deployed: true,
    observaciones: "",
  },
];
const ProjectsFront = () => {
  return (
    <div className="project-flex">
      {projects.map((project, index) => (
        <CardFront key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsFront;
