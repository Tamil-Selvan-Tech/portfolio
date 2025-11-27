import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center gap-6">

        {/* Copyright */}
        <p className="text-gray-400 text-lg">
           &copy; {new Date().getFullYear()}  All rights reserved @  <span className="text-yellow-300">Tamil Selvan</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
