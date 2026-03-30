import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Project = ({ name, description, icon, liveDemo, github, technologies }) => {
  return (
    <article className="glass-card p-5 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        {icon && <img src={icon} alt={name} className="w-9 h-9 rounded-md object-cover" />}
        <h3 className="text-lg font-bold tone-title">{name}</h3>
      </div>

      <p className="text-sm tone-muted leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 my-4">
        {technologies?.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <FaExternalLinkAlt className="text-xs" />
          Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 text-sm"
        >
          <FaGithub className="text-sm" />
          Source
        </a>
      </div>
    </article>
  )
}

export default Project
