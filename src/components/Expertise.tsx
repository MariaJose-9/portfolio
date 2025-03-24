import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { getLabel } from "../Config/Constants";

const labelsFirst = [
  "React Native",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "NodeJs",
  "Laravel",
  "MySQL",
  "Firebase",
  "Postman",
  "Git",
  "GitHub",
];

const labelsSecond = ["Linux", "GitHub Actions"];

const labelsThird = [
  "Google Firebase",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  const [lang, setLang] = React.useState<string>("es");
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{getLabel("expertise_title", lang)}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact as IconProp} size="3x" />
            <h3>Full Stack Mobile & Backend Development</h3>
            <p>
              He construido una variedad de aplicaciones móviles y backend desde
              cero utilizando tecnologías modernas como React Native, Node.js y
              Laravel. Tengo una fuerte competencia en el proceso SDLC y en el
              desarrollo tanto móvil como backend.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker as IconProp} size="3x" />
            <h3>DevOps & Automatización</h3>
            <p>
              Una vez creada la aplicación, ayudo a los clientes a configurar
              las pruebas DevOps, las canalizaciones CI/CD y la automatización
              del despliegue para garantizar experiencias Go-Live sin problemas.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* <div className="skill">
            <FontAwesomeIcon icon={faPython as IconProp} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
