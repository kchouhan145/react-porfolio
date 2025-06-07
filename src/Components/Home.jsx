import React from 'react'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaStackOverflow, FaWhatsapp } from 'react-icons/fa'
import heroImg from '../assets/hero.jpg'
import CVpdf from '../assets/KARTIK CHOUHAN CV.pdf'

const Home = () => {
  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-xl m-3 shadow-xl bg-white flex items-center justify-center dark:bg-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row w-full items-center justify-between py-8 px-6 gap-7">
        <div className="flex flex-col md:w-1/2 gap-6">
          <div className="flex items-center gap-6">
            <h1 className="font-extrabold text-3xl md:text-4xl leading-tight">
              I am <br /><div className='text-green-500'>Kartik Chouhan</div>a Full-Stack Web Developer and<br />Tech Enthusiast
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg mt-1 md: text-justify dark:text-white">
            I have expertise in Programming with a strong foundation in C++ programming. Additionally, I possess a strong knowledge of the MERN stack and a solid background in Front-End development, having worked on multiple projects that demonstrate my skills in creating dynamic and responsive web applications.
          </p>
          <div className="flex gap-6 mt-4 text-2xl text-gray-700 dark:text-white">
            <a href="https://github.com/kchouhan145" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kchouhan14/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/919997694610?text=Hey%0A" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/kchouhan.14" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center mt-8 md:mt-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-48 h-48 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg"
          />
          <a
            href={CVpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
