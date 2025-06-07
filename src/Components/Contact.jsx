import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[95vh] w-[90vw] max-w-6xl mx-auto rounded-xl m-3 shadow-xl bg-white flex flex-col items-center justify-center p-8 dark:bg-gray-800 ">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-8 text-center dark:text-green-500">
        Feel free to reach out via email, phone, or connect with me on social media!
      </p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700 dark:text-white">Email:</span>
          <a href="mailto:k1452003@gmail.com" className="text-blue-600 dark:text-violet-300 hover:underline">
            k1452003@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-700 dark:text-white">Mobile:</span>
          <a href="tel:+919997694610" className="text-blue-600 dark:text-violet-300 hover:underline">
            +91 9997694610
          </a>
        </div>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/kchouhan145" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg className="w-7 h-7 text-gray-700 hover:text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/kchouhan14/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg className="w-7 h-7 text-blue-700 hover:text-blue-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/kchouhan.14" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-7 h-7 text-pink-500 hover:text-pink-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.388 3.678 1.369c-.981.981-1.239 2.093-1.297 3.374C2.014 5.668 2 6.077 2 12c0 5.923.014 6.332.072 7.613.058 1.281.316 2.393 1.297 3.374.981.981 2.093 1.239 3.374 1.297C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.393-.316 3.374-1.297.981-.981 1.239-2.093 1.297-3.374.058-1.281.072-1.69.072-7.613 0-5.923-.014-6.332-.072-7.613-.058-1.281-.316-2.393-1.297-3.374-.981-.981-2.093-1.239-3.374-1.297C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
          </svg>
        </a>
        {/* LeetCode */}
        <a href="https://leetcode.com/kchouhan14" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <svg className="w-7 h-7 text-yellow-500 hover:text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
            <path d="M25.6 16c0-2.112-.832-4.096-2.336-5.6l-6.4-6.4a1.6 1.6 0 0 0-2.272 2.272l6.4 6.4a4.8 4.8 0 0 1 0 6.752l-6.4 6.4a1.6 1.6 0 1 0 2.272 2.272l6.4-6.4A7.936 7.936 0 0 0 25.6 16z"/>
            <circle cx="16" cy="16" r="2.5" fill="#FFA116"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact
