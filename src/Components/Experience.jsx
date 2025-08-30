import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'

const Experience = () => {
const experiences = [
    {
        id: 1,
        title: "Developer Intern",
        company: "Koders",
        location: "Remote",
        duration: "July 2025 - August 2025",
        type: "Internship",
        description: [
            "Gained hands-on experience with React JS, Tailwind CSS, and Electron JS",
            "Implemented multilingual support using i18n for enhanced accessibility",
            "Improved technical expertise through real-world feature development",
            "Enhanced problem-solving, teamwork, and communication skills in a collaborative remote environment"
        ],
        technologies: ["React", "Tailwind CSS", "Electron JS", "i18n", "JavaScript"]
    },
    {
        id: 2,
        title: "AI Azure Intern",
        company: "Edunet Foundation",
        location: "Remote",
        duration: "Jun 2025 - Jun 2025",
        type: "Internship",
        description: [
            "Gained hands-on experience with Microsoft Azure AI services and cloud technologies",
            "Developed and implemented AI solutions using Azure Machine Learning platform",
            "Worked with Azure Cognitive Services for natural language processing and computer vision",
            "Collaborated on AI projects and learned industry best practices for cloud-based AI development"
        ],
        technologies: ["Microsoft Azure", "Azure ML", "Azure Cognitive Services", "Python", "AI/ML", "Cloud Computing"]
    }
]

  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200'
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
      case 'Freelance':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
    }
  }

  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-xl m-3 shadow-xl bg-white dark:bg-gray-800 dark:text-white">
      <div className="py-8 px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Professional Experience
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            My journey in the world of software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              
              {/* Experience card */}
              <div className="ml-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold mb-2">
                      <FaBriefcase className="text-sm" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getTypeColor(exp.type)}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-green-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Ready to Work Together?</h3>
            <p className="mb-4">Let's discuss how my experience can contribute to your next project.</p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
