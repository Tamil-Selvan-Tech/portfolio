import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Resume from '/resume-tamil.pdf';

const HeroSection = () => {
    const fullText = 'A Web Developer';
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 150;

        const handleTyping = () => {
            if (!isDeleting && charIndex < fullText.length) {
                setText(fullText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(fullText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
                return;
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false); // start typing again
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting]);

    return (
        <section id='home' className='
            grid 
            grid-cols-1 
            md:grid-cols-[50%_50%] 
            w-full 
            min-h-screen
            bg-black
        '>
            {/* Left Section */}
            <div className='
                flex justify-center items-center text-center
                flex-col gap-5 p-6
                md:p-10
            '>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p className='
                        w-full 
                        bg-gradient-to-r from-cyan-200 via-blue-300 to-white 
                        bg-clip-text text-transparent 
                        text-xl md:text-2xl 
                        font-second flex items-start 
                        py-6
                        text-center md:text-left
                    '>
                        I'm
                    </p>

                    <h1 className='
                        w-full 
                        text-4xl sm:text-6xl md:text-7xl 
                        font-name 
                        bg-gradient-to-r from-white/80 via-cyan-300 to-purple-400 
                        bg-clip-text text-transparent
                        text-center md:text-left
                    '>
                        Tamil Selvan
                    </h1>

                    <p className='
                        flex font-second mt-5 justify-center md:justify-start 
                        w-full 
                        text-xl md:text-2xl 
                        bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 
                        bg-clip-text text-transparent font-semibold
                    '>
                        {text}
                        <span className='blinking-cursor ml-1'>|</span>
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-5 mt-5'>
                    <a href="#projects">  <button className='
                        text-white font-semibold border border-white 
                        p-2 rounded-md w-full sm:w-40
                        hover:bg-yellow-400 hover:text-black transition-colors duration-300
                        cursor-pointer
                        
                    '>
                        See My Projects
                    </button> </a>

                    <a
                        href="/resize-resume-tamil.pdf"
                        download={Resume}
                        className='
    text-black font-bold border p-2 rounded-md w-full sm:w-40
    bg-white hover:bg-black hover:text-white transition-colors duration-300
    cursor-pointer text-center
  '
                    >
                        Download CV
                    </a>
                </div>

                <div className='
                    flex gap-6 mt-6 cursor-pointer
                    justify-center md:justify-start
                '>
                    <FaLinkedin size={30} className='text-white media-icon hover:bg-white hover:text-blue-600 p-[4px] rounded-md' />
                    <a href="https://github.com/Tamil-Selvan-Tech?tab=repositories"> <IoLogoGithub size={30} className='bg-white media-icon p-[4px] rounded-md' /></a>
                    <FaInstagram size={30} className='text-white media-icon hover:text-pink-500 p-[4px] rounded-md' />
                </div>
            </div>

            {/* Right Section (Lottie) */}
            <div className='
                flex w-full items-center justify-center 
                p-6 md:p-0
            '>
                <DotLottieReact
                    className='
                        w-64 h-64 
                        sm:w-96 sm:h-96 
                        md:w-[80%] md:h-[80%]
                    '
                    src="https://lottie.host/dfac3ad0-0e66-4b41-a0aa-12c16aafef25/26pDYJXUpe.lottie"
                    loop
                    autoplay
                />
            </div>
        </section>
    );
};

export default HeroSection;
