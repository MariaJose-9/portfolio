import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { github, linkedin, name, title } from "../Config/Constants";
import profileImg from "../assets/images/profile.jpg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{name}</h1>
          <p>{title}</p>

          <div className="mobile_social_icons">
            <a href={github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;