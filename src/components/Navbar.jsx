import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHomeVisible, setIsHomeVisible] = useState(true);

  // Track visible sections + home visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const homeSection = document.getElementById("home");

    // Observer for active section underline
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));

    // Observer for Logo change (only home section)
    const homeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHomeVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    if (homeSection) homeObserver.observe(homeSection);

    return () => {
      sections.forEach((sec) => sectionObserver.unobserve(sec));
      if (homeSection) homeObserver.unobserve(homeSection);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="max-w-screen mx-auto flex justify-between items-center h-15 px-4 md:px-8">

        {/* LOGO - CHANGE BASED ON HOME VISIBILITY */}
        <div className={`font-bold text-4xl select-none 
  ${isHomeVisible ? "text-yellow-300" : "text-purple-600"}`}
        >
          {isHomeVisible ? "My Portfolio" : "Tamil Selvan"}
        </div>


        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-300"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>

        {/* NAV LINKS */}
        <ul
          className={`
            fixed top-14 left-0 w-full h-[calc(100vh-3.5rem)]
            bg-black/95 flex flex-col items-center justify-center
            space-y-8 text-xl font-semibold text-yellow-300
            transition-all duration-300 md:static md:flex md:flex-row md:space-x-10 md:space-y-0
            md:bg-transparent md:w-auto md:h-auto
            
            ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-[-120%] opacity-0"}
            md:translate-y-0 md:opacity-100
          `}
          onClick={() => setMenuOpen(false)}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                relative transition 
                pb-1 text-yellow-300

                after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[3px] after:w-0 after:bg-purple-800 after:transition-all after:duration-300

                hover:after:w-full 

                ${activeSection === item.id ? "after:w-full text-yellow-300" : ""}
              `}
            >
              {item.label}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
