import React from 'react'

const Skills = () => {
  const skillGroups = [
    {
      title: 'Full-Stack Development',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      detail: 'MongoDB, Express, React, Node.js with scalable app architecture.'
    },
    {
      title: 'Frontend Engineering',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      detail: 'JavaScript, Tailwind CSS, responsive UI systems, and component design.'
    },
    {
      title: 'Backend & APIs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      detail: 'Express.js, REST APIs, authentication, middleware, and server logic.'
    },
    {
      title: 'Databases',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      detail: 'MySQL, PostgreSQL, schema design, query optimization, and data modeling.'
    },
    {
      title: 'Programming',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      detail: 'C++, Python, and modern JavaScript for algorithms and automation tasks.'
    },
    {
      title: 'Version Control',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      detail: 'Git and GitHub workflows for collaboration, reviews, and releases.'
    }
  ]

  return (
    <section className="page-shell">
      <div className="mb-8 text-center">
        <h2 className="section-title">Core Skills</h2>
        <p className="section-lead mt-2 max-w-2xl mx-auto">
          Focused on end-to-end application development with practical engineering and consistent delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((skill) => (
          <div key={skill.title} className="glass-card p-6 transition-transform duration-300 hover:-translate-y-1">
            <img src={skill.icon} alt={skill.title} className="w-11 h-11 mb-4" />
            <h3 className="font-bold text-lg tone-title mb-2">{skill.title}</h3>
            <p className="text-sm tone-muted leading-relaxed">{skill.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
