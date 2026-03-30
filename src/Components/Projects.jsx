import React from 'react'
import Project from './Project'
import NotesIcon from '../assets/notessaver.png'
import WeatherIcon from '../assets/weather.png'
import QuizIcon from '../assets/quiz.png'
import ArtGenIcon from '../assets/ArtGen.png'
import ChatAppIcon from '../assets/ChatApp.png'

const Projects = () => {
  const projects = [
    {
      name: 'DC Zone (Chat Application)',
      description:
        'A full-stack real-time chat platform with Socket.io, JWT authentication, and responsive UX for seamless communication.',
      icon: ChatAppIcon,
      liveDemo: 'https://dczone.onrender.com/',
      github: 'https://github.com/kchouhan145/ChatApp',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT']
    },
    {
      name: 'ArtGen',
      description:
        'A prompt generation platform that helps users craft high-quality ideas for AI-powered image creation workflows.',
      icon: ArtGenIcon,
      liveDemo: 'https://art-gen-one.vercel.app/',
      github: 'https://github.com/kchouhan145/ArtGen',
      technologies: ['MERN', 'REST API', 'Prompt Engineering']
    },
    {
      name: 'Notes App',
      description:
        'A lightweight React notes application with local storage persistence and smooth editing workflows.',
      icon: NotesIcon,
      liveDemo: 'https://notes-app-kartik.vercel.app/',
      github: 'https://github.com/kchouhan145/notesApp',
      technologies: ['React', 'Local Storage', 'JavaScript']
    },
    {
      name: 'Weather App',
      description:
        'A city-based weather tracker that fetches and displays real-time climate data from third-party APIs.',
      icon: WeatherIcon,
      liveDemo: 'https://weather-kartik.vercel.app/',
      github: 'https://github.com/kchouhan145/Weather-App1',
      technologies: ['JavaScript', 'Weather API', 'Responsive UI']
    },
    {
      name: 'Quiz App',
      description:
        'An interactive quiz interface developed with React and Tailwind CSS to showcase reusable UI components.',
      icon: QuizIcon,
      liveDemo: 'https://react-quiz-app-kartik.vercel.app/',
      github: 'https://github.com/kchouhan145/React-quiz-app',
      technologies: ['React', 'Tailwind CSS', 'Component Design']
    }
  ]

  return (
    <section className="page-shell">
      <header className="text-center mb-8">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-lead mt-2 max-w-2xl mx-auto">
          A collection of products focused on real-world usage, practical engineering, and polished user experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
