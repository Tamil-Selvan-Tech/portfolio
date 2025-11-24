import React from 'react';

const About = () => {
  return (
    <section
      id='about'
      className='
        grid 
        grid-cols-1 
        md:grid-cols-[30%_70%] 
        w-full 
        min-h-screen 
        bg-black
      '
    >
      {/* LEFT SIDE - Heading + Image */}
      <div
        className='
          text-white 
          flex flex-col items-center justify-center 
          px-6 py-8
          md:h-screen
        '
      >
        {/* Heading */}
        <h1
          className='
            text-3xl md:text-4xl font-extrabold 
            uppercase tracking-wide
            bg-yellow-300 bg-clip-text text-transparent
            mb-4 md:mb-6 text-center
          '
        >
          About Me
        </h1>

        {/* Image — NOW visible in mobile too */}
        <div
          className='
            rounded-full 
            shadow-[0_0_25px_rgba(168,85,247,0.7)]
            hover:scale-105 transition-transform duration-500
            w-40 h-40
            sm:w-48 sm:h-48
            md:w-60 md:h-60
            flex items-center justify-center
            overflow-hidden
            mb-4
          '
        >
          <img
            src="/tamil.jpeg"
            alt="Tamil Selvan"
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>

      {/* RIGHT SIDE - Text Card */}
      <div
        className='
          flex justify-center items-start md:items-center
          px-6 py-6 md:py-10
          w-full
        '
      >
        <div
          className='
            border-2 border-purple-800 
            text-[15px] md:text-[16px]
            rounded-2xl 
            w-full max-w-md 
            p-5 md:p-6
            bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900
            shadow-lg shadow-purple-800/50
            transition-all duration-500 
            hover:scale-105 hover:shadow-purple-500/80 hover:border-purple-500
          '
        >
          <p className='text-white leading-relaxed mb-3'>
            I’m a passionate Web Developer with a strong foundation in
            JavaScript, React.js, HTML, and CSS. I completed my B.Sc.
            in Computer Technology at Erode Arts and Science College, where
            I built strong interest in creating responsive and user-friendly
            web applications.
          </p>

          <p className='text-white leading-relaxed'>
            I love turning ideas into interactive digital experiences and
            constantly explore new tools and technologies. From developing a
            modern Online Attendance System to designing UI components, I focus
            on creating meaningful and functional solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
