import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export const projects = [
  {
    title: "Vue | Node.js | Swagger",
    subtitle: "Recipes Web-App",
    description: "client server application for exploring and searching food recipes, filter results and enable different users to generate new ones into the system.",
    image: "./recipes_gif.gif",
    link: "https://recipes-app-v2.herokuapp.com/#/",
  },
  {
    title: "Vue | Vuex | Howler.js",
    subtitle: "Audio Loop Machine",
    description:"Play different audio samples in a synchronized manner, record & replay session.responsive for desktop and mobile",
    image: "./audio-loop-gif.gif",
    link: "https://moveo-demo-app.herokuapp.com/",
  },
  {
    title: "Java",
    subtitle: "Search Engine",
    description: "Includes parsing and indexing 500k documents and retrieve the most relevants based on the user query",
    image: "./search-engine.gif",
    link: "https://github.com/ohadNave/Search-Engine-App",
  },
  {
    title: "Python",
    subtitle: "Final Project - OCL Recommendation System",
    description:"Data science project, includes parsing plenty of raw data, extract complex features and perform classification experiments",
    image: "./OCL-gif.gif",
    link: "https://github.com/amitthewolf/OCLRecommendation",
  },
];



export const skills = [
  "JavaScript",
  "React",
  "Java",
  "Node",
  "Python",
  "Vue",
];

export const timelineElements = [
  {
    role: "Software Developer Internship",
    company: "Ribbon Communications",
    date: "2021",
    desc: ["Responsible for developing automation framework",
          "Work independently and solve complex problems.",
          "Design & implement a generic template for users input.",
          "Allowing to automate Rest API calls and SSH commands.",
          "Technologies : Java || Spring || Hibernate || Swagger"],
    icon: faBriefcase
  },
  {
    role: "Math & English Teacher",
    company: "`Mifal Ha-Pais` scholarship",
    date: "2020 – 2021",
    desc: ["Educating high school students in English and Mathematics "],
    icon: faHandsHelping
  },
  {
    role: "Student",
    company: "Ben Gurion University",
    date: "2017-2021",
    desc: ["Software & Information Systems Engineering"],
    icon: faGraduationCap
  },
  {
    role: "Officer",
    company: "IDF",
    date: "2010-2014",
    desc: ["Responsibility for developing soldiers for officer's courses.",
          "Interview soldiers in favor of service at the unit headquarters.",
          "Meeting defined extraction targets."],
    icon: faPeopleCarry

  },
];
