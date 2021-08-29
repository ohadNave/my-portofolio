import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi there!
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my personal website!
            <br></br>I'm an Information Systems & Software Engineering graduate from Ben-Gurion University of the negev.
            <br></br>Highly motivated and eager to learn and improve in the field of software development.
            <br></br>Looking to integrate as a junior software developer in a valuable organization.
            <br></br>Explore my portofolio and check out some of my academic and spare time projects.
          </p>
          
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
               <FontAwesomeIcon size="2x" icon={faLinkedin} />

               <span className="ml-2">Linkedin</span>
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <FontAwesomeIcon size="2x" icon={faGithub} />

              <span className="ml-2">GitHub</span>
            </a>



          </div>
        </div>
        <div >
          <img class="object-cover transform scale-150 h-full w-full" src="./logo.svg"
          />
        </div>
      </div>
    </section>
  );
}