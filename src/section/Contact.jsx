import React from 'react'
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="max-container relative">
        <div className="flex justify-center flex-col gap-20">
          <div className="flex justify-center">
            <a href="#Contact">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Contact</h2>
            </a>
          <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Contact</h3>
          </div>
        </div>
        
      </div>
    </div>
        {/* <div>
            <h2>Contact Me</h2>
            <div>
            <FaTelegram />

            </div>
        </div>
        <div>

        </div> */}
    </div>
  )
}

export default Contact