import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getLabel } from "../Config/Constants";

function Timeline() {
  const [lang, setLang] = React.useState<string>("es");

  return (
    <div id="history">
      <div className="items-container">
        <h1>{getLabel("timeline_title", lang)}</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Desarrollador Móvi
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Mdconsgroup, EC
            </h4>
            <p>
              Desarrollo de aplicaciones en el framework React Native.
              Despliegue de aplicaciones móviles en la AppStore y PlayStore.
              Creación y mantenimiento de servicios API en NodeJS. Creación de
              bases de datos MySQL. Creación de panel administrativo web en
              React + Vite. Mantenimiento de un panel administrativo en Laravel
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Especialista en aplicaciones móviles
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Conauto S.A., EC
            </h4>
            <p>
              {" "}
              Despliegue de aplicaciones móviles en la AppStore y PlayStore.
            </p>
            <p> Desarrollo de aplicaciones en el framework React Native. </p>
            <p>Consumo de servicios API. </p>
            <p>Consumo de Firestore de Firebase.</p>
            <p>Consumo de Cloud Functions de Firebase.</p>
            <p>Manejo de bases de datos Realm.</p>
            <p>Mantenimiento de backend realizado en node js.</p>
            <p>Migración de data desde Oracle a Firebase. </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Desarrollador y Soporte Técnico
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Samir Technology, EC
            </h4>
            <p>- Gestión del sistema Quickbooks.</p>
            <p>- Gestión del sistema de facturación electrónico. </p>
            <p>- Desarrollo de diversos programas en C# para escritotrio.</p>
            <p>
              - Integración bidireccional entre Quickbooks y una base de datos
              MySql..
            </p>
            <p>
              - Desarrollo del módulo web, gestión de recibos de cobros,
              desarrollado en Laravel para el uso de los vendedores.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Desarrollador practicante remoto
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              ASAP BUSINESS, EC
            </h4>
            <p>
              Desarrollo de módulo de facturación electrónica para Dolibarr.
            </p>
            <p>Desarrollo de módulo de facturación electrónica para Odoo.</p>
            <p>Programación en PHP y Python.</p>
            <p>Gestión de base de datos MySQL y PostgreSQL.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2019"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">
              Desarrollador practicante
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Gaheos, EC</h4>
            <p>Aprendizaje de desarrollo móvil.</p>
            <p>Desarrollar en React Native.</p>
            <p>
              Desarrollar lectura de tarjetas NFC a través del dispositivo
              Famoco.
            </p>
            <p>nstalación de sistema operativo linux mint en laptops.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
