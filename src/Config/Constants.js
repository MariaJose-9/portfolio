// Description: Constants used in the application.
export const name = "María José Sánchez";
export const title = "Full-Stack Developer (React Native / Node.js)";
export const github = "https://github.com/MariaJose-9";
export const linkedin =
  "https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-s%C3%A1nchez-cepeda/";



//LABELS IN ENGLISH AND SPANISH
export const labels = {
  en: {
    nav: {
      home: "Home",
      expertise: "Expertise",
      timeline: "Timeline",
      projects: "Projects",
      contact: "Contact",
    },
    footer: {
      made: "Made with",
      by: "by",
    },
    home: {
      title: "Hi, I am María José Sánchez Cepeda",
      subtitle: "I am a software developer",
      button: "Contact me",
    },
    expertise: {
      title: "Expertise",
      subtitle: "I have experience in the following technologies",
    },
    timeline: {
      title: "Career History",
      subtitle: "My professional experience",
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my projects",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk",
    },
  },
  es: {
    expertise_title: "Experiencia",
    timeline_title: "Trayectoria profesional",
    projects_title: "Proyectos",
    contact_title: "Contáctame",
  },
};

export const getLabel = (key, lang) => labels[lang][key];
