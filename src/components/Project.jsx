import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Project = () => {
  const projects = [
    { title: "Online Attendance", desc: "Track student attendance.", tags: ["React.js", "Tailwind"], img: "./Attendence/login.png", link: "https://online-attendance-project.onrender.com", category: "Front-End" },
    { title: "QR-Code-Generator", desc: "Generate the QR-code", tags: ["React", "API"], img: "./QR-img.png", link: "https://qr-code-generator-ti5a.onrender.com/", category: "Web Development" },
    { title: "Weather App", desc: "Live weather updates.", tags: ["React", "API"], img: "./weather.png", link: "https://aagaayaneram.netlify.app/", category: "Front-End" },
    { title: "To-Do App", desc: "Organize daily tasks.", tags: ["React", "mongo DB"], img: "./to-do-app.png", link: "https://to-do-list-mbwt.onrender.com", category: "Web Development" },
    { title: "canteen Order System", desc: "Booking Your Order.", tags: ["React.js", "Tailwind"], img: "./order-booking/order-page.png", link: "#", category: "Front-End" },
    { title: "The Intern Track ", desc: "Job Portal", tags: ["React.js", "Tailwind"], img: "./intern.png", link: "https://intern-track.onrender.com/", category: "Front-End" },
  ];

  const categories = ["All", "Web Development", "Front-End"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(4);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Web Development") return true;
    if (selectedCategory === "Back-End") return false;
    return project.category === selectedCategory;
  });

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, cardsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < filteredProjects.length - cardsPerPage ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : filteredProjects.length - cardsPerPage
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [filteredProjects.length, cardsPerPage]);

  return (
    <section
      id="projects"
      className="bg-black min-h-screen w-full flex flex-col items-center gap-6 pt-15 px-4"
    >
      <h1 className="text-yellow-300 text-3xl font-bold text-center">PROJECTS</h1>

      {/* Category Tabs */}
      <div className="text-white w-full flex gap-2 p-2">
        <ul className="w-full flex gap-2 sm:gap-4 justify-center flex-wrap">
          {categories.map((category, i) => (
            <li
              key={i}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-3 sm:px-4 py-1 rounded-md select-none transition-colors duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black"
                  : "hover:bg-yellow-300 hover:text-black"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects / Empty Message */}
      <div className="relative w-full max-w-6xl px-2 overflow-hidden">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-yellow-300 py-10">
              No projects found in this category.
          </div>
        ) : (
          <>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-2 flex-shrink-0"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <div className="border border-purple-800 rounded-lg p-2 sm:p-3 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 shadow-md shadow-purple-800/50 hover:scale-105 transition-all duration-300">
                    <div className="w-full h-40 sm:h-32 rounded-md overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-yellow-300 text-base sm:text-sm font-semibold text-center mt-2">
                      {project.title}
                    </h2>
                    <p className="text-white text-sm sm:text-xs mt-1 text-center">{project.desc}</p>
                    <div className="flex flex-wrap gap-1 mt-2 justify-center">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-yellow-500/20 text-yellow-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-yellow-400 text-black text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-yellow-300 mt-3"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-1 sm:left-3 -translate-y-1/2 bg-yellow-300 text-black w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-400"
              aria-label="Previous Slide"
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-1 sm:right-3 -translate-y-1/2 bg-yellow-300 text-black w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-400"
              aria-label="Next Slide"
            >
              <FaAngleRight />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Project;
