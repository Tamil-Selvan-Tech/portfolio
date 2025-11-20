import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },

  ];

  const certificates = [
    { img: "/certificates/nextlogic.jpg", caption: "NextLogic Workshop" },
    { img: "/certificates/tech-vedhu.png", caption: "Tech Vedhu Hackathon" },
    { img: "/certificates/UI-UX.jpeg", caption: "UI/UX Design Course" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCertificate = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextCertificate = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="skills"
      className="bg-black min-h-screen w-full flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 py-12 gap-12"
    >
      {/* Skills Side */}
      <div className="flex-1 text-center w-full">
        <h1 className="text-yellow-300 text-3xl font-bold mb-8 tracking-widest">
          SKILLS
        </h1>

        <div className="grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-sm sm:max-w-md mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 border border-purple-800 rounded-xl shadow-md shadow-purple-800/50 transform transition duration-300 hover:scale-110 hover:shadow-yellow-400/40"
            >
              <div className="text-xl sm:text-2xl mb-1 animate-bounce">{skill.icon}</div>
              <p className="text-white text-[10px] sm:text-xs font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Side */}
      <div className="flex-1 text-center w-full">
        <h1 className="text-yellow-300 text-3xl font-bold mb-8 tracking-widest">
          CERTIFICATES
        </h1>

        <div className="relative bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 border border-purple-800 rounded-lg shadow-md shadow-purple-800/50 p-4 max-w-sm sm:max-w-md mx-auto flex flex-col items-center">
          {/* Left Arrow */}
          <button
            onClick={prevCertificate}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-300 text-black w-7 h-7 flex items-center justify-center rounded-full hover:bg-yellow-400 transition"
          >
            <FaArrowLeft />
          </button>

          {/* Certificate Image */}
          <img
            src={certificates[currentIndex].img}
            alt={`Certificate ${currentIndex + 1}`}
            className="rounded-lg shadow-lg max-h-56 sm:max-h-64 object-contain border border-gray-700"
          />

          {/* Caption */}
          <p className="text-gray-300 mt-3 text-xs sm:text-sm italic">
            {certificates[currentIndex].caption}
          </p>

          {/* Right Arrow */}
          <button
            onClick={nextCertificate}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-300 text-black w-7 h-7 flex items-center justify-center rounded-full hover:bg-yellow-400 transition"
          >
            <FaArrowRight />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {certificates.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${idx === currentIndex
                  ? "bg-yellow-300 scale-110"
                  : "bg-gray-500 hover:bg-gray-400"
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
