"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeEffect from "./components/TypeEffect";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header";

export default function Home() {
  // const handleSendMessage = async (message) => {
  //   const response = await fetch('/api/messages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ message, senderId, receiverId })
  //   });
  //   const data = await response.json();
  //   console.log('Message sent:', data);
  // };

  const handleSendMessage = () => {
    alert("Message sent successfully!");
  };
  return (
    <>
      <main className="transition-all playfair-display-custom flex flex-col bg-[#efede5] min-h-screen overflow-hidden scroll-smooth">
        {/* Header */}
        <Header id="home" />

        {/* Home */}
        <section className="transition-all duration-300 ease-in-out flex flex-col lg:flex-row justify-center w-full lg:w-[90%] items-center mt-[40%] lg:mt-[10%] md:mt-[20%] sm:mt-[20%] text-center max-h-screen px-4 py-20 gap-6 lg:gap-9">
          <div className="text-[#375063] gap-x-px w-[90%]">
            <p className="text-3xl text-[#4f85a2] p-2">Hello, my name is</p>
            <h1 className="text-5xl md:text-6xl font-bold p-2">Jake Mayores</h1>
            <h1 className="text-4xl md:text-5xl text-[#70adcf] font-bold p-2">
              {TypeEffect()}
            </h1>

            <div className="w-[100%] md:w-[80%] p-2 mx-auto text-[#4f85a2]">
              <div className="space-x-4 mt-6 flex-row">
                <a href="https://www.facebook.com/jakejmayores" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="FB-icon size-10"
                  />
                </a>
                <a
                  href="https://www.instagram.com/mayoresjake/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="IG-icon size-10"
                  />
                </a>
                <a href="https://x.com/home" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="T-icon size-10"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jake-mayores-81677530a/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="LI-icon size-10"
                  />
                </a>
                <a href="https://github.com/Mayores04" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="GH-icon size-10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/prof.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              className="border-[#4f85a2] rounded-full max-h-80 max-w-80"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-28 flex justify-center items-center px-4 transition-all duration-300 ease-in-out"
        >
          <div className="grid rounded-lg grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 w-[90%] md:w-[90%] items-center px-4 lg:px-16 pb-6 justify-center lg:w-[90%] mx-auto bg-white gap-8">
            <div className="text-[#375063] w-full lg:w-[90%] flex flex-col justify-center items-start py-4 px-4 pt-9">
              <div className="flex mb-2 flex-col md:flex-row md:justify-center sm:justify-center justify-around items-center gap-4 md:gap-8 text-left">
                <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                <div className="bg-gray-700  text-white px-6 py-3 text-sm md:text-base rounded-lg shadow-md hover:bg-gray-800">
                  <a href="Resume.pdf" title="Resume" download="Resume.pdf">
                    Download CV
                  </a>
                </div>
              </div>

              <p className="text-xl md:text-[1.7rem] italic mb-4">
                "I am a 2nd-year college computer science student specializing
                in Front-end web development."
              </p>
              <p className="mb-4">
                I’m a passionate Front-End Web Developer with a strong Computer
                Science background. Skilled in HTML, CSS, JavaScript, C# and
                familiar with ReactJS, NodeJS, and TailwindCSS, I have gained
                valuable experience through freelance web development and as a
                front-end web developer in my school organization. Currently, I
                am exploring NextJS development to create dynamic and
                interactive web applications.
              </p>

              <div>
                <h3 align="left" className="font-bold text-2xl mb-2">
                  Languages and Tools:
                </h3>
                <p className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 justify-center items-center">
                  {/* HTML 5 */}
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* CSS */}
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* JavaScript */}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Git */}
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      alt="git"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* CSharp */}
                  <a
                    href="https://www.w3schools.com/cs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                      alt="csharp"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Java */}
                  <a
                    href="https://www.java.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                      alt="java"
                      width="50"
                      height="50"
                    />
                  </a>
                </p>
              </div>

              <div>
                <h3 align="left" className="font-bold text-2xl mb-2 mt-2">
                  Familiarity with the following:
                </h3>
                <p className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 justify-center items-center">
                  {/* ReactJS */}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="react"
                      width="50"
                      height="50"
                    />
                  </a>

                  {/* Next.js */}
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="nextjs"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Figma */}
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                      alt="figma"
                      width="50"
                      height="50"
                    />
                  </a>

                  {/* MongoDB */}
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="mongodb"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Node.js */}
                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="nodejs"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Python */}
                  <a
                    href="https://www.python.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="python"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Tailwind CSS */}
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="50"
                      height="50"
                    />
                  </a>
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="transition-all duration-300 ease-in-out h-full p-6 flex gap-8 flex-col sm:flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center">
              {/* First Image */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/jsprom.jpg"
                  className="rounded-3xl object-cover w-full h-auto max-h-72 max-w-72"
                  alt="Graduate in cap and gown"
                  width={300}
                  height={300}
                  priority
                />
              </div>

              {/* Second Image */}
              <div className="flex-shrink-0 flex items-center justify-center ">
                <Image
                  src="/images/SHSgradPic.jpg"
                  className="rounded-3xl object-cover w-full h-auto max-h-72 max-w-72 border-2 border-[#375063]"
                  alt="Man in a suit"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          className="w-full py-14 px-4 transition-all duration-300  flex justify-center items-center  ease-in-out"
          id="projects"
        >
          <div className="flex flex-col items-center justify-center  w-full lg:w-[90%] h-full px-4 py-20 gap-8 bg-blue-200 rounded-xl">
            {/* Project 1 */}
            <div className="container rounded-lg bg-gray-600 w-full md:w-[90%] flex flex-col lg:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/Portfolio.PNG"
                alt="MovieMunch System"
                width={600}
                height={700}
                className="rounded-md w-full h-auto max-w-md"
                priority
              />
              <div className="flex flex-col items-start w-full xl:w-[100%] lg:w-[95%] md:w-[80%] sm:w-[90%] text-justify">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Portfolio
                  </h1>

                  <button className="bg-gray-700 text-white flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-800">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    <a href="">See Live</a>
                  </button>
                </div>
                <p className="mt-4 text-white text-sm md:text-base lg:text-lg xl:text-xl">
                  Explore my personal portfolio, showcasing my journey as a
                  computer science student and aspiring software developer. This
                  website highlights my skills, projects, and experiences in the
                  field of technology.
                </p>
                <h3 className="flex gap-6 font-bold text-sm mt-8 sm:text-lg md:text-md text-left lg:text-2xl xl:text-2xl mb-2">
                  Tools and Library:
                  {/* Tailwind CSS */}
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* JavaScript */}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* Next.js */}
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="nextjs"
                      width="50"
                      height="50"
                      className="h-10 w-16"
                    />
                  </a>
                </h3>
              </div>
            </div>

            {/* Project 2 */}
            <div className="container rounded-lg bg-gray-600 w-full md:w-[90%] flex flex-col lg:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/MovieMunch.PNG"
                alt="MovieMunch System"
                width={600}
                height={700}
                className="rounded-md w-full h-auto max-w-md"
                priority
              />
              <div className="flex flex-col items-start w-full xl:w-[100%] lg:w-[95%] md:w-[80%] sm:w-[90%] text-justify">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    MovieMunch System
                  </h1>

                  <button className="bg-gray-700 text-white flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-800">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    See Live
                  </button>
                </div>

                <p className="mt-4 text-white text-sm md:text-base lg:text-lg xl:text-xl">
                  The MovieMunch System is an innovative desktop application
                  designed to enhance the cinema experience for users. This
                  platform allows customers to seamlessly book movie tickets and
                  pre-order snacks and beverages at MovieMunch Cinemas.
                </p>
                <h3 className="flex gap-6 font-bold text-sm mt-8 sm:text-lg md:text-md text-left lg:text-2xl xl:text-2xl mb-2">
                  Tools and Library:
                  {/* CSharp */}
                  <a
                    href="https://www.w3schools.com/cs/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                      alt="csharp"
                      width="50"
                      height="50"
                    />
                  </a>
                  {/* MongoDB */}
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="mongodb"
                      width="50"
                      height="50"
                    />
                  </a>
                </h3>
              </div>
            </div>

            {/* Project 3 */}
            <div className="container rounded-lg bg-gray-600 w-full md:w-[90%] flex flex-col lg:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/MovieMunch.PNG"
                alt="Project 3"
                width={600}
                height={700}
                className="rounded-md w-full h-auto max-w-md"
                priority
              />
              <div className="flex flex-col items-start w-full xl:w-[100%] lg:w-[95%] md:w-[80%] sm:w-[90%] text-justify">
              <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Project title
                  </h1>

                  <button className="bg-gray-700 text-white flex items-center px-4 py-2 rounded-lg shadow-md hover:bg-gray-800">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    See Live
                  </button>
                </div>
                <p className="mt-4 text-white text-sm md:text-base lg:text-lg xl:text-xl">
                  Short Description
                </p>
                <h3 className="flex gap-6 font-bold text-sm mt-8 sm:text-lg md:text-md text-left lg:text-2xl xl:text-2xl mb-2">
                  Tools and Library:
                  {/*  */}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="transition-all duration-300 ease-in-out flex flex-col items-center justify-center h-full px-4 py-28 gap-8"
        >
          <div className="w-[90%] md:w-[90%] bg-white p-8 rounded-lg shadow-md">
            <div className="contacts-info flex flex-col lg:flex-row">
              <div className="contacts-left lg:w-1/2 text-left">
                <h1 className="text-4xl font-bold text-[#375063]">Contact</h1>
                <p className="text-lg mt-4 mb-6 text-[#4f85a2]">
                  You can connect with me via social media or email. I'd love to
                  hear from you!
                </p>

                <div className="contacts-platform space-y-4">
                  {/* Facebook */}
                  <div className=" flex items-center space-x-4">
                    <a
                      href="https://www.facebook.com/jakejmayores"
                      target="_blank"
                      className="facebook-icon"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <p className="text-[#375063]">Follow me on Facebook</p>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://www.instagram.com/mayoresjake/"
                      target="_blank"
                      className="Instagram-icon"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                    <p className="text-[#375063]">Like me on Instagram</p>
                  </div>

                  {/* Twitter */}
                  <div className="twitter-platform flex items-center space-x-4">
                    <a
                      href="https://x.com/home"
                      target="_blank"
                      className="twitter-icon"
                    >
                      <FontAwesomeIcon icon={faXTwitter} size="3x" />
                    </a>
                    <p className="text-[#375063]">Like me on Twitter</p>
                  </div>

                  {/* LinkedIn */}
                  <div className="linkedIn-platform flex items-center space-x-4">
                    <a
                      href="https://www.linkedin.com/in/jake-mayores-81677530a/"
                      target="_blank"
                      className="linkedIn-icon"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <p className="text-[#375063]">
                      Connect with me on LinkedIn
                    </p>
                  </div>
                </div>

                {/* Email Me */}
                <div className="email-me mt-8 flex-col justify-center items-center text-center">
                  <p className="text-xl text-center text-[#375063] mb-4">
                    Let's create something together 🤙
                  </p>
                  <a
                    className="email-me-btn inline-flex items-center justify-center bg-[#4f85a2] text-white py-3 px-6 rounded-full hover:bg-[#7bb1ce] transition duration-300"
                    href="mailto:jakemayores05@gmail.com"
                  >
                    <FontAwesomeIcon icon={faInbox} className="mr-2" /> Email Me
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contacts-right lg:w-1/2 mt-7 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4">
                <h1 className="text-4xl font-bold text-[#375063]">
                  Send a message
                </h1>
                <form className="mt-4">
                  <input
                    className="w-full border-2 border-[#375063] text-black rounded-lg p-2 mb-4"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="w-full border-2 border-[#375063] text-black rounded-lg p-2 mb-4"
                    type="email"
                    placeholder="Your Email"
                  />
                  <textarea
                    className="w-full border-2 border-[#375063] text-black rounded-lg p-2 mb-4 min-h-12"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                  <button
                    className="bg-[#4f85a2] text-white py-2 px-4 rounded-lg hover:bg-[#7bb1ce] transition duration-300"
                    type="submit"
                    onClick={handleSendMessage}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex justify-center items-center py-4 text-[#375063]">
          <p>
            &copy; 2024 Jake Mayores. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
