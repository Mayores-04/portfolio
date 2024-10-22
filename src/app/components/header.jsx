import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const hireMeBtn = () => {
      const email = 'jakemayores05@gmail.com';
      const subject = 'Hire Request';
      const body = `Hello Jake,
  
      I'm interested in hiring you for a project. Please provide more details on your availability and rates.
  
      Thank you!
      [Your Name]`;
  
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <header className="bg-[#efede5] text-[#375063] fixed w-full h-24 flex items-center justify-between px-10 shadow-md z-50 top-0">
        <div className="flex items-center space-x-4">
          <div className="text-[#4f85a2] font-extrabold text-4xl p-1 ml-[-30px] xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 rounded-full flex justify-center items-center text-center">
            <Image
              src="/images/transparentLogo.png"
              alt="Logo image"
              width={90}
              height={90}
              priority
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-lg mr-10 xl:mr-10 lg:mr-0 md:mr-0">
          <Link
            href="#home"
            className="hover:text-[#7bb1ce] text-[#375063] font-bold transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#7bb1ce] text-[#375063] font-bold transition duration-300"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-[#7bb1ce] text-[#375063] font-bold transition duration-300"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#7bb1ce] text-[#375063] font-bold transition duration-300"
          >
            Contact
          </Link>
          <button
            className="bg-blue-200 hover:bg-[#7bb1ce] hover:text-[#d0e3ed] text-[#4f85a2] font-extrabold py-2 px-6 rounded-full shadow-lg transition duration-300"
            role="button"
            onClick={hireMeBtn}
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none bg-gray-400 rounded-full p-4"
            onClick={toggleMobileMenu}
          >
          <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <nav className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen space-y-6 z-40">
          <Link
            href="#home"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMobileMenu}
          >
            About Me
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 mr-[-20px] xl:mr-0 lg:mr-0 rounded-full shadow-lg transition duration-300"
            role="button"
            onClick={closeMobileMenu}
          >
            Hire Me
          </button>
        </nav>
      )}
    </>
  );
}
