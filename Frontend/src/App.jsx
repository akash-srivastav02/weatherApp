import React from 'react'
import Weather from './components/Weather'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-300 w-full max-w-4xl">
      <Weather/>
      <Footer/>
      </div>
    </div>
    </>
    )
}

export default App