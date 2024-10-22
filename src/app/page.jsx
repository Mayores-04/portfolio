"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeEffect from "./components/TypeEffect";

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
      <main className="playfair-display-custom flex flex-col bg-[#efede5] min-h-screen overflow-hidden scroll-smooth">
        {/* Header */}
        <Header id="home" />

        {/* Home */}
        <section className="flex flex-col lg:flex-row justify-center w-full lg:w-[90%] items-center mt-[40%] lg:mt-[10%] md:mt-[20%] sm:mt-[20%] text-center max-h-screen px-4 py-20 gap-6 lg:gap-9">
          <div className="text-[#375063] gap-x-px w-[90%]">
            <p className="text-3xl text-[#4f85a2] p-2">Hello, my name is</p>
            <h1 className="text-5xl md:text-6xl font-bold p-2">Jake Mayores</h1>
            <h1 className="text-4xl md:text-5xl text-[#70adcf] font-bold p-2">
              {TypeEffect()}
            </h1>

            <div className="w-[90%] md:w-[80%] p-2 mx-auto text-[#4f85a2]">
              <div className="space-x-6 mt-6 flex-row">
                <a href="https://www.facebook.com/jakejmayores" target="_blank">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="3x"
                    className="FB-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/mayoresjake/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="3x"
                    className="IG-icon"
                  />
                </a>
                <a href="https://x.com/home" target="_blank">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="3x"
                    className="T-icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jake-mayores-81677530a/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                    className="LI-icon"
                  />
                </a>
                <a href="https://github.com/Mayores04" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="GH-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/idpic.png"
              alt="Profile Picture"
              width={500}
              height={500}
              className="border-[#4f85a2] rounded-full"
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="w-full py-28 flex justify-center items-center px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-4 lg:px-16 pb-10 justify-center w-full lg:w-[90%] mx-auto bg-white gap-8">
            <div className="text-[#375063] w-full lg:w-[90%] flex flex-col justify-center items-start pt-9">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
              <p className="text-xl md:text-3xl italic mb-4">
                "I am a 2nd-year college computer science student specializing
                in Front-end web development."
              </p>
              <p className="mb-4">
                Hello! I’m a passionate Front-End Web Developer with a strong
                Computer Science background. Skilled in HTML, CSS, JavaScript,
                ReactJS, NodeJS, and TailwindCSS, I have gained valuable
                experience through freelance web development and as a front-end
                developer in my school organization. Currently, I am exploring
                React development to create dynamic and interactive web
                applications.
              </p>
              <p className="mb-4">
                My goal is to deliver high-quality, visually appealing user
                interfaces that enhance user experience. I thrive on the
                challenge of transforming complex concepts into intuitive
                designs, ensuring that each project is both functional and
                aesthetically pleasing.
              </p>
              <p>
                I am always eager to learn and grow, so if you’re interested in
                collaborating or just want to chat about technology, feel free
                to reach out!
              </p>
            </div>

            {/* Image Section */}
            <div className=" h-full grid grid-flow-row items-center lg:flex lg:justify-center xl:flex-row">
              {/* First Image */}
              <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 w-full lg:w-1/2">
                <Image
                  src="/images/idpic.png" 
                  className="rounded-3xl object-cover w-full h-auto"
                  alt="Graduate in cap and gown"
                  width={300} 
                  height={300}
                  priority
                />
              </div>

              {/* Second Image */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <Image
                  src="/images/idpic.png" 
                  className="rounded-3xl object-cover w-full h-auto"
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
        <section className="w-full py-14 px-4" id="projects">
          <div className="flex flex-col items-center justify-center h-full px-4 py-20 gap-8">
            {/* Project 1 */}
            <div className="container bg-gray-600 w-[90%] md:w-[90%] flex flex-col md:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/idpic.png"
                alt="Project 1"
                width={300}
                height={300}
                className="border-2 border-black max-w-full h-auto"
              />
              <div>
                <h1 className="text-4xl md:text-6xl">Project 1 Title</h1>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit officia deleniti suscipit adipisci? Possimus optio
                  vitae deleniti tempore repellat, consequatur doloremque, sit
                  laborum eaque ex minima placeat ducimus quaerat a.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="container bg-gray-600 w-[90%] md:w-[90%] flex flex-col md:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/idpic.png"
                alt="Project 2"
                width={300}
                height={300}
                className="border-2 border-black max-w-full h-auto"
              />
              <div>
                <h1 className="text-4xl md:text-6xl">Project 2 Title</h1>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit officia deleniti suscipit adipisci? Possimus optio
                  vitae deleniti tempore repellat, consequatur doloremque, sit
                  laborum eaque ex minima placeat ducimus quaerat a.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="container bg-gray-600 w-[90%] md:w-[90%] flex flex-col md:flex-row items-center text-center p-4 gap-6">
              <Image
                src="/images/idpic.png"
                alt="Project 3"
                width={300}
                height={300}
                className="border-2 border-black max-w-full h-auto"
              />
              <div>
                <h1 className="text-4xl md:text-6xl">Project 3 Title</h1>
                <p className="mt-4 text-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Impedit officia deleniti suscipit adipisci? Possimus optio
                  vitae deleniti tempore repellat, consequatur doloremque, sit
                  laborum eaque ex minima placeat ducimus quaerat a.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center h-full px-4 py-28 gap-8"
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
              <div className="contacts-right lg:w-1/2">
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
            &copy; {new Date().getFullYear()} Jake Mayores. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
