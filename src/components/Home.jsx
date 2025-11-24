import { useEffect, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {

    const fullText = "A Web Developer";
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    // TYPING ANIMATION
    useEffect(() => {
        let speed = isDeleting ? 60 : 140;

        const handleTyping = () => {
            if (!isDeleting && charIndex < fullText.length) {
                setText(fullText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(fullText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting]);

    return (
        <section
            id="home"
            className="
                grid grid-cols-1 
                md:grid-cols-2 
                w-full min-h-screen 
                bg-black
                px-6 md:px-20
                py-10
            "
        >

            {/* LEFT → TEXT */}
            <div className="
                flex flex-col 
                justify-center
            
                items-center md:items-start
                text-center md:text-left
                gap-6
            ">
                <p className="
                    text-xl md:text-2xl 
                    bg-gradient-to-r from-cyan-200 via-blue-300 to-white
                    bg-clip-text text-transparent
                ">
                    I'm
                </p>

                <h1 className="
                    text-4xl sm:text-6xl md:text-7xl 
                    font-name 
                    bg-gradient-to-r from-white/80 via-cyan-300 to-purple-400
                    bg-clip-text text-transparent
                ">
                    Tamil Selvan
                </h1>

                <p className="
                    text-xl md:text-2xl font-second font-semibold
                    bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400
                    bg-clip-text text-transparent
                    flex items-center
                    gap-1
                ">
                    {text}
                    <span className="animate-pulse">|</span>
                </p>

                {/* FIXED BUTTON SIZE */}
                <div className="
                    flex flex-col sm:flex-row 
                    gap-4 mt-4
                ">
                    <a href="#projects">
                        <button className="
                            w-44 h-12
                            text-white font-semibold 
                            border border-white
                            rounded-md
                            hover:bg-yellow-400 hover:text-black
                            transition duration-300
                        ">
                            See My Projects
                        </button>
                    </a>

                    <a href="/resume-tamil.pdf" download>
                        <button className="
                            w-44 h-12
                            font-bold
                            bg-black text-white
                            border border-white
                            rounded-md
                            hover:bg-white hover:text-black
                            transition duration-300
                        ">
                            Download CV
                        </button>
                    </a>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex gap-6 mt-5">
                    <FaLinkedin
                        size={32}
                        className="
                            text-white 
                            hover:text-blue-500 
                            transition duration-300 
                            hover:scale-110
                            cursor-pointer
                        "
                    />

                    <a href="https://github.com/Tamil-Selvan-Tech?tab=repositories">
                        <IoLogoGithub
                            size={32}
                            className="
                                text-white 
                                bg-white/10 p-1 rounded-md 
                                hover:bg-white hover:text-black
                                transition duration-300 
                                hover:scale-110
                                cursor-pointer
                            "
                        />
                    </a>

                    <FaInstagram
                        size={32}
                        className="
                            text-white 
                            hover:text-pink-500 
                            transition duration-300 
                            hover:scale-110
                            cursor-pointer
                        "
                    />
                </div>
            </div>

            {/* RIGHT → IMAGE (VISIBLE ONLY ON LAPTOP / DESKTOP) */}
            <div className="
                hidden md:flex
                justify-end 
                items-center 
                mt-10 md:mt-0
            ">
                <DotLottieReact
                    src="https://lottie.host/dfac3ad0-0e66-4b41-a0aa-12c16aafef25/26pDYJXUpe.lottie"
                    loop
                    autoplay
                    className="
                        w-64 h-64 
                        sm:w-96 sm:h-96 
                        md:w-[85%] md:h-[85%]
                    "
                />
            </div>

        </section>
    );
};

export default HeroSection;
