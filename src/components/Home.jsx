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

    // TYPING EFFECT 
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
                pt-28 pb-16
            "
        >

            {/* LEFT SIDE — MOBILE OPTIMIZED */}
            <div className="
                flex flex-col 
                justify-center
                items-center md:items-start
                text-center md:text-left
                gap-5 md:gap-6
            ">

                <p className="
                    text-2xl md:text-2xl 
                    bg-gradient-to-r from-cyan-200 via-blue-300 to-white
                    bg-clip-text text-transparent
                ">
                    I'm
                </p>

                <h1 className="
                    text-5xl sm:text-6xl md:text-6xl 
                    font-name 
                    leading-tight
                    bg-gradient-to-r from-white/80 via-cyan-300 to-purple-400
                    bg-clip-text text-transparent
                ">
                    Tamil Selvan
                </h1>

                <p className="
                    text-2xl sm:text-3xl md:text-2xl 
                    font-second font-semibold
                    bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400
                    bg-clip-text text-transparent
                    flex items-center gap-1
                ">
                    {text}
                    <span className="animate-pulse">|</span>
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <a href="#projects">
                        <button className="
                            w-56 h-14
                            text-lg
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
                            w-56 h-14
                            text-lg
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
                <div className="flex gap-8 mt-5">
                    <FaLinkedin
                        size={36}
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
                            size={36}
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
                        size={36}
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

            {/* RIGHT → IMAGE (DESKTOP ONLY) */}
            <div className="
                hidden md:flex
                justify-end 
                items-center 
            ">
                <DotLottieReact
                    src="https://lottie.host/dfac3ad0-0e66-4b41-a0aa-12c16aafef25/26pDYJXUpe.lottie"
                    loop
                    autoplay
                    className="
                        w-[85%] h-[85%]
                    "
                />
            </div>

        </section>
    );
};

export default HeroSection;
