import React from 'react'

const Project = (props) => {
  return (
    <div>
      <div
        className="project-card bg-gray-50 border border-gray-300 rounded-lg p-5 max-w-[350px] min-h-[380px] shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-black dark:shadow-violet-700 dark:border-none"
      >
        <div>
          <div className="flex items-center mb-3">
            {props.icon && (
              <span className="text-2xl mr-3">
                <img src={props.icon} alt="Project Icon" className="w-8 h-8 object-cover" />
              </span>
            )}
            <h2 className="m-0 text-xl dark:text-white font-bold">{props.name}</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4 dark:text-white leading-relaxed">{props.description}</p>
          
          {/* Technology Tags */}
          {props.technologies && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {props.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex gap-2.5">
          <a href={props.liveDemo} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded bg-green-500 text-white cursor-pointer hover:bg-green-600 transition-colors duration-200 text-sm">
              Live Demo
            </button>
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded bg-gray-900 text-white cursor-pointer dark:bg-transparent dark:border dark:border-violet-700 hover:bg-gray-800 dark:hover:bg-violet-700/20 transition-colors duration-200 text-sm">
              GitHub Code
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
