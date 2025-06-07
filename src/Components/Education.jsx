import React from 'react'

const Education = () => {
  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-xl m-3 shadow-xl bg-white flex items-center justify-center dark:bg-gray-800">
      <div className="w-full p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        <div className="space-y-8">
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-black dark:shadow-violet-700 dark:border-none">
            <h3 className="text-xl font-semibold text-green-500 mb-2">High School</h3>
            <p className="text-gray-700 dark:text-white">Institution: <span className="font-medium">Maharana Pratap HSS Nakur Saharanpur</span></p>
            <p className="text-gray-700 dark:text-white">Board: <span className="font-medium">Uttar Pradesh Madhyamik Shiksha Parishad</span></p>
            <p className="text-gray-700 dark:text-white">Year: <span className="font-medium">2019</span></p>
            <p className="text-gray-700 dark:text-white">Percentage/Grade: <span className="font-medium">84.5%</span></p>
          </div>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-black dark:shadow-violet-700 dark:border-none">
            <h3 className="text-xl font-semibold text-green-500 mb-2">Intermediate</h3>
            <p className="text-gray-700 dark:text-white">Institution: <span className="font-medium">C S Dayanand IC Ambehta Peer Saharanpur</span></p>
            <p className="text-gray-700 dark:text-white">Board: <span className="font-medium">Uttar Pradesh Madhyamik Shiksha Parishad</span></p>
            <p className="text-gray-700 dark:text-white">Year: <span className="font-medium">2021</span></p>
            <p className="text-gray-700 dark:text-white">Percentage/Grade: <span className="font-medium">79%</span></p>
          </div>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-black dark:shadow-violet-700 dark:border-none">
            <h3 className="text-xl font-semibold text-green-500 mb-2">Graduation</h3>
            <p className="text-gray-700 dark:text-white">Institution: <span className="font-medium">Gurukul Kangri (DU) Haridwar</span></p>
            <p className="text-gray-700 dark:text-white">Degree: <span className="font-medium">Bachelor of Computer Science</span></p>
            <p className="text-gray-700 dark:text-white">Year: <span className="font-medium">2024</span></p>
            <p className="text-gray-700 dark:text-white">Percentage/Grade: <span className="font-medium">8.15</span></p>
          </div>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md flex flex-col justify-between transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-black dark:shadow-violet-700 dark:border-none">
            <h3 className="text-xl font-semibold text-green-500 mb-2">Post Graduation</h3>
            <p className="text-gray-700 dark:text-white">Institution: <span className="font-medium">Kurukshetra University , Kurukshetra</span></p>
            <p className="text-gray-700 dark:text-white">Degree: <span className="font-medium">Masters of Computer Applications</span></p>
            <p className="text-gray-700 dark:text-white">Year: <span className="font-medium">2026</span></p>
            <p className="text-gray-700 dark:text-white">Percentage/Grade: <span className="font-medium">Pursuing</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
