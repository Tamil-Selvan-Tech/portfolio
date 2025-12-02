import React from 'react';

const About = () => {
  return (
    <section
      id='about'
      className='
        w-full min-h-screen bg-black 
        grid grid-cols-1 
        md:grid-cols-2 
        gap-6 
        px-6 md:px-12 lg:px-20 
        py-10
      '
    >
      {/* LEFT SIDE - Heading + Image */}
      <div
        className='
          text-white 
          flex flex-col items-center justify-center 
          gap-6
        '
      >
        <h1
          className='
            text-4xl md:text-5xl font-extrabold 
            uppercase tracking-wide
            bg-yellow-300 bg-clip-text text-transparent
            text-center
          '
        >
          About Me
        </h1>

        <div
          className='
            rounded-full 
            shadow-[0_0_25px_rgba(168,85,247,0.7)]
            hover:scale-105 transition-transform duration-500
            w-52 h-52 md:w-64 md:h-64
            flex items-center justify-center
            overflow-hidden
          '
        >
          <img
            src="/tamil.jpeg"
            alt="Tamil Selvan"
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </div>

      {/* RIGHT SIDE - Text */}
      <div
        className='
          flex justify-center items-center
          text-white
        '
      >
        <div
          className='
            border-2 border-purple-800 
            rounded-2xl 
            w-full 
            p-6 md:p-8
            bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900
            text-[15px] md:text-[17px]
            leading-relaxed
            shadow-lg shadow-purple-800/50
            transition-all duration-500 
            hover:scale-[1.02] 
            hover:shadow-purple-500/80 
            hover:border-purple-500
          '
        >
          <p>
            I’m a passionate Web Developer with a strong foundation in
            JavaScript, React.js, HTML, and CSS. I completed my B.Sc.
            in Computer Technology at Erode Arts and Science College, where
            I built strong interest in creating responsive and user-friendly
            web applications.
          </p>

          <p className='mt-4'>
            I love turning ideas into interactive digital experiences and
            constantly explore new tools and technologies. From developing a
            modern Online Attendance System to designing UI components, I focus
            on creating meaningful and functional solutions that improve user
            interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
