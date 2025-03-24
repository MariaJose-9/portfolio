import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  email,
  getLabel,
  github,
  linkedin,
  phone,
  phone_label,
} from "../Config/Constants";
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Email, GitHub, LinkedIn, Phone, WhatsApp } from "@mui/icons-material";

function Contact() {
  const [lang, setLang] = useState<string>("es");

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{getLabel("contact_title", lang)}</h1>
          <p>
            Gracias por tu interés en ponerte en contacto conmigo. Estaré
            encantada de responder tus preguntas, recibir tus comentarios o
            simplemente conectar. Puedes comunicarte directamente por correo,
            teléfono o WhatsApp. También podemos conectar profesionalmente a
            través de LinkedIn y GitHub.
          </p>
          <List>
            <ListItem>
              <ListItemIcon sx={{ color: "white", fontSize: 28 }}>
                <Email />
              </ListItemIcon>
              <ListItemText>
                <Link href={`mailto:${email}`} color="white" underline="hover">
                  {email}
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "white", fontSize: 28 }}>
                <Phone />
              </ListItemIcon>
              <ListItemText>
                <Link href={`tel:${phone}`} color="white" underline="hover">
                  {phone_label}
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "white", fontSize: 28 }}>
                <WhatsApp />
              </ListItemIcon>
              <ListItemText>
                <Link
                  href={`https://wa.me/${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                  underline="hover"
                >
                  Enviar mensaje por WhatsApp
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "white", fontSize: 28 }}>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText>
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                  underline="hover"
                >
                  LinkedIn
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon sx={{ color: "white", fontSize: 28 }}>
                <GitHub />
              </ListItemIcon>
              <ListItemText>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                  underline="hover"
                >
                  GitHub
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Contact;
