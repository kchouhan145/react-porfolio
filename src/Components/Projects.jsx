import React from 'react'
import Project from './Project'
import NotesIcon from '../assets/notessaver.png'
import WeatherIcon from '../assets/weather.png'
import QuizIcon from '../assets/quiz.png'
import ArtGenIcon from '../assets/ArtGen.png'
import ChatAppIcon from '../assets/ChatApp.png';

const Projects = () => {
  const projects = [
    { 
      name: 'DC Zone(A Chat App)', 
      description: 'A full-stack real-time chat application built with the MERN stack. Features include real-time messaging using Socket.io, user authentication with JWT tokens, and a responsive design for seamless communication.', 
      icon: ChatAppIcon, 
      liveDemo: 'https://dczone.onrender.com/', 
      github: 'https://github.com/kchouhan145/ChatApp',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT', 'Tailwind CSS']
    },
    { 
      name: 'ArtGen', 
      description: 'ArtGen is a web application that helps users generate creative prompts for AI-based image generation tools. Built with the MERN Stack.', 
      icon: ArtGenIcon, 
      liveDemo: 'https://art-gen-one.vercel.app/', 
      github: 'https://github.com/kchouhan145/ArtGen',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'API Integration']
    },
    { 
      name: 'Notes App', 
      description: 'This project is made with the use of React JS. Which saves the notes in your local storage and provide features to more with that', 
      icon: NotesIcon, 
      liveDemo: 'https://notes-app-kartik.vercel.app/', 
      github: 'https://github.com/kchouhan145/notesApp',
      technologies: ['React', 'JavaScript', 'Local Storage', 'CSS']
    },
    { 
      name: 'Weather App', 
      description: 'Developed a dynamic Weather App using JavaScript to provide real-time weather updates for cities around the world.', 
      icon: WeatherIcon, 
      liveDemo: 'https://weather-kartik.vercel.app/', 
      github: 'https://github.com/kchouhan145/Weather-App1',
      technologies: ['JavaScript', 'Weather API', 'HTML', 'CSS', 'Responsive Design']
    },
    { 
      name: 'Quiz App', 
      description: 'This project aims to showcase my React Skills and this made using Tailwind CSS , React JS.', 
      icon: QuizIcon, 
      liveDemo: 'https://react-quiz-app-kartik.vercel.app/', 
      github: 'https://github.com/kchouhan145/React-quiz-app',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Component Design']
    },
  ];

  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-2xl m-3 shadow-2xl bg-white flex flex-col items-center justify-center gap-8 p-8 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, idx) => (
          <Project
            key={idx}
            name={project.name}
            description={project.description}
            icon={project.icon}
            liveDemo={project.liveDemo}
            github={project.github}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
