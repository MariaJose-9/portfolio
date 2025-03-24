import React from "react";
import damasco from "../assets/images/damasco.png";
import damasco_doctor from "../assets/images/damasco_doctor.png";
import pentax from "../assets/images/pentax.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/damasco.png";
import "../assets/styles/Project.scss";
import { getLabel } from "../Config/Constants";

const projects = [
  {
    id: 1,
    title: "Damasco",
    description:
      "Damasco Paciente es una aplicación diseñada para ayudar a personas con Enfermedad Inflamatoria Intestinal (EII) a llevar un mejor control de su salud. Permite registrar síntomas, recibir recordatorios de medicación, documentar comidas con fotos y encontrar baños cercanos mediante GPS. Además, los pacientes pueden compartir su información con su médico de confianza para un seguimiento más preciso y personalizado, mejorando así el manejo de la enfermedad.",
    image: damasco,
    url: "https://www.linkedin.com/posts/miguel-puga-tejada-2b89894a_el-instituto-ecuatoriano-de-enfermedades-activity-7097532695089459201-T9IZ/?originalSubdomain=es",
  },
  {
    id: 1,
    title: "Damasco Doctor",
    description:
      "Damasco Doctor es una aplicación diseñada para que los médicos gestionen de manera eficiente los datos de sus pacientes con Enfermedad Inflamatoria Intestinal (EII). Permite visualizar y analizar información clave como registros de síntomas, historial de medicación, alimentación y ubicaciones relevantes, facilitando un seguimiento más preciso y personalizado. A través de una conexión previa con el paciente, los doctores pueden acceder a datos en tiempo real para mejorar la toma de decisiones y optimizar el tratamiento.",
    image: damasco_doctor,
    url: "https://www.linkedin.com/posts/miguel-puga-tejada-2b89894a_damasco-activity-7078474436848271361--1iJ/?originalSubdomain=es",
  },
  {
    id: 1,
    title: "Pentax Congress",
    description: `Esta aplicación le permite ver toda la información sobre las conferencias médicas de PentaxCongress.`,
    image: pentax,
    url: "https://apps.apple.com/ec/app/pentax- congress/id1432242746",
  },
];
function Project() {
  const [lang, setLang] = React.useState<string>("es");
  return (
    <div className="projects-container" id="projects">
      <h1>{getLabel("projects_title", lang)}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project">
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
        {/* <div className="project">
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>High Speed Chase</h2>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </div>
        <div className="project">
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Astro Raiders</h2>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Datum: Integrated Learning Platform</h2>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </div>
        <div className="project">
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer">
            <h2>WeManage: Real Estate Asset Management</h2>
          </a>
          <p>
            This mobile application allows realtors in Japan to securely manage
            their property information and view future income predictions. This
            app is built with Ruby on Rails and JavaScript.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.byuh.edu/covid-19-case-management"
            target="_blank"
            rel="noreferrer"
          >
            <h2>COVID-19 Case Management</h2>
          </a>
          <p>
            Built official charts for COVID/vaccination tracking for an
            educational institution using JavaScript and the Google Sheets API
            v4. The dashboard served the university's leadership in their
            decision-making processes.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/multi-reg-analysis"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Multiple Regression Property Analysis</h2>
          </a>
          <p>
            Analyzed the real estate market in Japan and predicted property
            prices by implementing statistical methods such as OLS and
            multi-regression analysis. This project leveraged Python and various
            libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.
          </p>
        </div>
        <div className="project">
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://holokai.byuh.edu/programs-of-study"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Programs of Study</h2>
          </a>
          <p>
            Designed and developed a custom component for a CMS-based platform
            (e.g., 'Brightspot') using Java, Handlebars, and LESS. University
            students can find their majors of interest through this module.
          </p>
        </div>
        <div className="project">
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Transfer Evaluation Matrix</h2>
          </a>
          <p>
            Created an interactive CSV table generator with Java, Handlebars,
            and LESS. This project helps transfer students to quickly identify
            eligible credits.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/yujisatojr/submeowrine"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Submeowrine</h2>
          </a>
          <p>
            Developed and released an Android mobile application using Java and
            Android Studio that runs a 2D shooting game.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Project;
