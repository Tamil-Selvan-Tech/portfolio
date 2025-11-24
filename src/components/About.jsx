import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full 
        min-h-screen 
        bg-black
        flex 
        flex-col 
        md:grid 
        md:grid-cols-[35%_65%]
      "
    >

      {/* LEFT SIDE */}
      <div
        className="
          text-white 
          flex flex-col 
          items-center 
          justify-center
          px-4 
          py-6 md:py-10
          w-full
        "
      >

        {/* Heading */}
        <h1
          className="
            text-3xl md:text-4xl 
            font-extrabold 
            uppercase tracking-wide
            bg-yellow-300 bg-clip-text text-transparent
            mb-3 md:mb-6
            text-center
          "
        >
          About Me
        </h1>

        {/* IMAGE */}
        <div
          className="
            rounded-full 
            shadow-[0_0_25px_rgba(168,85,247,0.7)]
            hover:scale-105 
            transition-transform duration-500
            w-36 h-36
            sm:w-44 sm:h-44
            md:w-56 md:h-56
            flex items-center justify-center
            overflow-hidden
            mb-4
          "
        >
          <img
            src="/tamil.jpeg"
            alt="Tamil Selvan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="
          flex 
          justify-center 
          items-start md:items-center
          px-4 
          pb-10 pt-2
          md:py-10
          w-full
        "
      >
        <div
          className="
            border-2 border-purple-800 
            text-[15px] md:text-[16px]
            rounded-2xl 
            w-full max-w-xl 
            p-4 md:p-6
            bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900
            shadow-lg shadow-purple-800/50
            transition-all duration-500 
            hover:scale-105 
            hover:shadow-purple-500/80 
            hover:border-purple-500
          "
        >
          <p className="text-white leading-relaxed mb-3">
            I’m a passionate Web Developer with a strong foundation in
            JavaScript, React.js, HTML, and CSS. I have completed B.Sc.
            in Computer Technology at Erode Arts and Science College, where
            I developed strong interest in building responsive, user-friendly
            web applications.
          </p>

          <p className="text-white leading-relaxed">
            I love turning ideas into interactive digital experiences and
            constantly explore new tools & technologies. From developing an
            Online Attendance System to creating modern UI components, I aim
            to build meaningful and efficient web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
