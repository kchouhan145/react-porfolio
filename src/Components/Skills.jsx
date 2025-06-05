import React from 'react'

const Skills = () => {
  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-xl m-3 shadow-xl bg-white flex items-center justify-center">
      <div className="w-full px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="MERN" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">MERN Full Stack</h3>
            <p className="text-gray-600 text-center">MongoDB, Express, React, Node.js</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">JavaScript</h3>
            <p className="text-gray-600 text-center">ES6+, asynchronous programming, DOM manipulation</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-center">Utility-first, responsive design, custom themes</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Node.js</h3>
            <p className="text-gray-600 text-center">Express, REST APIs, backend development</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-12 h-12 mb-4 bg-white rounded"/>
            <h3 className="font-semibold text-lg mb-2">Express.js</h3>
            <p className="text-gray-600 text-center">REST APIs, middleware, backend frameworks</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="AI" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">AI</h3>
            <p className="text-gray-600 text-center">Machine Learning, Deep Learning, NLP</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL/DBMS" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">SQL/DBMS</h3>
            <p className="text-gray-600 text-center">MySQL, PostgreSQL, database design, queries</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">Python</h3>
            <p className="text-gray-600 text-center">Scripting, automation, data analysis</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12 mb-4"/>
            <h3 className="font-semibold text-lg mb-2">C++ Programming</h3>
            <p className="text-gray-600 text-center">OOP, STL, competitive programming</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
