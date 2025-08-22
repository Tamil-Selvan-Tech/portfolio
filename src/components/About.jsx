import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
      {/* Left side - Heading + Lottie */}
      <div className='
          text-white 
          flex flex-col items-center justify-center 
          animate-fadeIn 
          px-6
          py-10
          md:h-screen
        '
      >
        <h1
          className='
            text-3xl font-extrabold uppercase tracking-wide
            bg-yellow-300
            bg-clip-text text-transparent
            mb-6
            text-center
            md:text-left
            md:ml-10
          '
        >
          About Me
        </h1>

        <div
          className='
            p-3 rounded-full 
            shadow-[0_0_20px_rgba(168,85,247,0.6)]
            hover:scale-105 transition-transform duration-500
            mb-6
            w-48 h-48
            md:w-60 md:h-60
          '
        >
          <DotLottieReact
            className='w-full h-full rounded-full'
            src='https://lottie.host/236d15ca-8094-45ca-91bf-e102693658f8/LmeTLgtQuo.lottie'
            loop
            autoplay
          />
        </div>
      </div>

      {/* Right side - Text card */}
      <div className='
          flex justify-center items-center 
          px-6
          py-10
          md:h-screen
        '
      >
        <div
          className='
            border-2 border-purple-800 
            text-[16px] 
            rounded-2xl 
            w-full max-w-md 
            p-6 
            bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900
            shadow-lg shadow-purple-800/50
            transition-all duration-500 ease-in-out
            hover:scale-105 hover:shadow-purple-500/80 hover:border-purple-500
            animate-slideFade delay-500
          '
        >
          <p className='text-white leading-relaxed mb-4'>
            I’m a passionate Web Developer with a strong foundation in
            JavaScript, React.js, HTML, and CSS. I’m currently pursuing my B.Sc.
            in Computer Technology at Erode Arts and Science College, where
            I’ve developed a keen interest in building responsive, user-friendly
            web applications.
          </p>

          <p className='text-white leading-relaxed'>
            I enjoy turning ideas into interactive digital experiences and
            constantly explore new tools and technologies to improve my skills.
            From developing a modern Online Attendance System to contributing to
            socially impactful projects, I aim to create solutions that are both
            functional and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
