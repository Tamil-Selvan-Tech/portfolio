import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { IoMdMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLocationDot, FaLocationArrow } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "template_6379",      // Replace with your Service ID
      "template_jz0cgik",     // Replace with your Template ID
      form.current,
      "p1-R1HUiguYtWUZ4Y"       // Replace with your Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <section id='contact' className='bg-black min-h-screen w-full flex items-center px-4 py-10'>
      <div className='w-full max-w-6xl mx-auto flex flex-col items-center text-white'>
        {/* Heading */}
        <h1 className='text-yellow-300 text-3xl font-bold mb-2'>Get In Touch</h1>
        <p className='text-center text-gray-300 text-sm sm:text-base mb-8'>
          Ready to start your next project? Let's work together to create something <br className='hidden sm:block'/>
          <span className='text-white text-[16px]'>Amazing</span>
        </p>

        {/* Grid Layout */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left Side */}
          <div className='p-5'>
            <h1 className='text-yellow-300 text-2xl font-semibold mb-3'>Let's Connect</h1>
            <p className='text-gray-300 text-sm sm:text-base mb-6'>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
            </p>

            {/* Contact Info */}
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4 items-center'>
                <IoMdMail size={30} className='text-yellow-400 border border-gray-300 rounded-full p-1.5 cursor-pointer' />
                <div className='text-sm'>
                  <h3 className='font-medium'>Email</h3>
                  <p>tamillselvan1010@gmail.com</p>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <MdOutlineLocalPhone size={30} className='text-yellow-400 border border-gray-300 rounded-full p-1.5 cursor-pointer' />
                <div className='text-sm'>
                  <h3 className='font-medium'>Phone</h3>
                  <p>+91 6379585809</p>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <FaLocationDot size={30} className='text-yellow-400 border border-gray-300 rounded-full p-1.5 cursor-pointer' />
                <div className='text-sm'>
                  <h3 className='font-medium'>Location</h3>
                  <p>Pallipalayam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className='p-5 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 border border-purple-800 rounded-lg shadow-md shadow-purple-800/50'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input type="text" name="firstName" placeholder='First Name' className='input-port flex-1' required />
                <input type="text" name="lastName" placeholder='Last Name' className='input-port flex-1' required />
              </div>
              <input type="email" name="email" placeholder='Email Address' className='input-port' required />
              <input type="text" name="subject" placeholder='Subject' className='input-port' required />
              <textarea name="message" placeholder='Your Message' className='input-port h-28 resize-none' required></textarea>

              <button type="submit" className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold text-lg flex items-center justify-center gap-2 py-2 rounded-md transition-all'>
                Send Message <FaLocationArrow size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
