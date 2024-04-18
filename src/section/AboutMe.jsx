import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="max-container relative flex flex-col gap-20">
        <div className="flex justify-center">
          <div className="flex justify-center">
            <a href="#AboutMe">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">
                About Me
              </h2>
            </a>
            <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">
              About Me
            </h3>
          </div>
        </div>
        <div className="flex gap-40">
            <img src="../src/assets/Taran.jpeg"  alt="About Me" width="550" height="450" className='rounded-2xl'/>
          <div className="flex flex-col gap-10 bg-slate-900 p-10 rounded-2xl">
            <p className="text-white text-justify text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <ul className="flex gap-10 text-white text-2xl font-bold">
            <li
                className={`hover:text-amber-400 ${
                  activeSection === 'skills' ? 'text-amber-400' : ''} cursor-pointer`}
                onClick={() => handleSectionClick('skills')}
              >
                Skills
              </li>
              <li
                className={`hover:text-amber-400 ${
                  activeSection === 'technologies' ? 'text-amber-400' : ''
                } cursor-pointer`}
                onClick={() => handleSectionClick('technologies')}
              >
                Technologies
              </li>
            </ul>
            {activeSection === 'skills' && (
              <ul className="flex gap-10">
                <li className="text-white flex flex-col gap-4 w-9/12 text-justify">
                  <h6 className="text-amber-400 text-xl">Web Development</h6>
                  <p>
                    Experience in Frontend Development and passionate about
                    fullstack web development. Proficient in HTML, CSS and
                    Javascript and also in CSS framework Tailwind.
                  </p>
                </li>
                <li className="text-white flex flex-col gap-4 w-9/12 text-justify">
                  <h6 className="text-amber-400 text-xl">UX/UI</h6>
                  <p>
                    Building design for Websites and Webpages. Well familiar with
                    Figma and Canva graphic design softwares.
                  </p>
                </li>
              </ul>
            )}
            {activeSection === 'technologies' && (
              <ul className="flex gap-10">
              <li className="text-white flex flex-col gap-4 w-9/12 text-justify">
                <h6 className="text-amber-400 text-xl">React</h6>
                <p>
                As a proficient React.js and JavaScript developer, I have honed my skills in building dynamic, interactive, and scalable web applications that deliver seamless user experiences.
                </p>
              </li>
              <li className="text-white flex flex-col gap-4 w-9/12 text-justify">
                <h6 className="text-amber-400 text-xl">Tailwind</h6>
                <p>
                  Proficient in using Tailwind CSS and also in other CSS frameworks like Bootstrap and Material UI
                </p>
              </li>
            </ul>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;