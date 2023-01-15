import React from "react";
const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-18 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Hi there,<br></br> I'm Abhinav Guddu.
            <br className="hidden lg:inline-block " />
          </h1>
          <p className="mb-8 leading-relaxed">
          Front-end developer with experience in React, focused on creating efficient and visually appealing web applications. I have a background in front-end development and skilled at creating user-friendly web apps also passionate about using React to create scalable and intuitive web experiences, and  always looking to improve my skills in the field.<br></br>  In the spare time, I enjoy immersing myself in the world of comics and puzzles, as well as expressing my creativity through YouTube video creation        </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg vibrate-button"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:full w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./displaypicss.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
