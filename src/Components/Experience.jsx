import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Developer Intern',
      company: 'Koders',
      location: 'Remote',
      duration: 'Jul 2025 - Aug 2025',
      description: [
        'Built user-facing features with React, Tailwind CSS, and Electron JS.',
        'Implemented multilingual support using i18n for better accessibility.',
        'Contributed to production-quality feature delivery in an agile team setup.'
      ],
      technologies: ['React', 'Tailwind CSS', 'Electron', 'i18n', 'JavaScript']
    },
    {
      id: 2,
      title: 'AI Azure Intern',
      company: 'Edunet Foundation',
      location: 'Remote',
      duration: 'Jun 2025',
      description: [
        'Worked with Azure AI services and practical cloud-based ML workflows.',
        'Built solution prototypes using Azure Machine Learning and cognitive services.',
        'Learned engineering patterns for secure and scalable AI deployments.'
      ],
      technologies: ['Microsoft Azure', 'Azure ML', 'Cognitive Services', 'Python', 'AI/ML']
    }
  ]

  return (
    <section className="page-shell">
      <header className="text-center mb-10">
        <h2 className="section-title">Experience</h2>
        <p className="section-lead mt-2">Professional roles that shaped my development and cloud engineering skills.</p>
      </header>

      <div className="space-y-5">
        {experiences.map((exp) => (
          <article key={exp.id} className="glass-card p-6 md:p-7">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold tone-title">{exp.title}</h3>
                <div className="flex items-center gap-2 tone-link font-semibold mt-1">
                  <FaBriefcase className="text-xs" />
                  <span>{exp.company}</span>
                </div>
              </div>
              <span className="chip">Internship</span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm tone-muted mb-4">
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, idx) => (
                <li key={idx} className="tone-body text-sm leading-relaxed flex gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
