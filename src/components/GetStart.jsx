import React from 'react'

const GetStart = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center">
      {/* Container */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-around p-4">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxOKl-QOSOhzA7GDQvwfQA8fSBsjbpT8Tvg&s"
            alt="Placeholder"
            className="w-full h-auto object-cover rounded-lg bg-cover opacity-10 saturate-0"
          />
        </div>
        
        {/* Link Section */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-300 mb-4">
            Welcome to the <span className='text-yellow-600 font-bold text-4xl'>WeatherApp</span>
          </h1>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition font-semibold tracking-wide uppercase"
          >
           GetStarted
          </a>
        </div>

      </div>
    </div>
  )
}

export default GetStart