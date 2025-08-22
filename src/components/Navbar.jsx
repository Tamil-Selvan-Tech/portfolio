import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12 px-4 md:px-8">
        {/* Logo */}
        <div className="text-yellow-300 font-bold text-lg cursor-pointer select-none">
          MyPortfolio
        </div>

        {/* Hamburger button - visible only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-yellow-300 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
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

        {/* Navigation links */}
        <ul
          className={`
            fixed top-12 left-0 w-full h-[calc(100vh-3rem)] bg-black/90 backdrop-blur-md
            flex flex-col items-center justify-center space-y-6 py-8
            text-yellow-300 font-semibold text-lg
            transition-transform duration-300 ease-in-out
            md:static md:flex md:flex-row md:space-x-10 md:space-y-0 md:h-auto md:bg-transparent md:backdrop-blur-0 md:py-0 md:w-auto

            /* MOBILE toggle classes */
            ${menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-[-120%] opacity-0 pointer-events-none'}

            /* OVERRIDE for desktop: always visible */
            md:translate-y-0 md:opacity-100 md:pointer-events-auto
          `}
          onClick={() => setMenuOpen(false)} // close menu on mobile when clicking any link
        >
          <a href="#home" className="port-nav cursor-pointer hover:text-yellow-400 transition-colors">
            Home
          </a>
          <a href="#about" className="port-nav cursor-pointer hover:text-yellow-400 transition-colors">
            About
          </a>
           <a href="#skills" className="port-nav cursor-pointer hover:text-yellow-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="port-nav cursor-pointer hover:text-yellow-400 transition-colors">
            Projects
          </a>
         
          <a href="#contact" className="port-nav cursor-pointer hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
