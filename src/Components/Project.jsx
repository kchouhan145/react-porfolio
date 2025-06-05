import React from 'react'

const Project = (props) => {
  return (
    <div>
      <div
        className="project-card bg-gray-50 border border-gray-300 rounded-lg p-5 max-w-[350px] min-h-[340px] shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-2xl"
      >
        <div>
          <div className="flex items-center mb-3">
            {props.icon && (
              <span className="text-2xl mr-3">
                <img src={props.icon} alt="Project Icon" />
              </span>
            )}
            <h2 className="m-0 text-2xl">{props.name}</h2>
          </div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="mt-4 flex gap-2.5">
          <a href={props.liveDemo} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded bg-green-500 text-white cursor-pointer">
              Live Demo
            </button>
          </a>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded bg-gray-900 text-white cursor-pointer">
              GitHub Code
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
