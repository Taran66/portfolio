import React from 'react'
import LeftsideContact from '../components/LeftsideContact';
import RightsideContact from '../components/RightsideContact';

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-container relative w-screen flex justify-center">
        <div className="flex justify-center flex-col gap-20 w-full">
          <div className="flex justify-center">
            <a href="#Contact">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Contact</h2>
            </a>
            <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Contact</h3>
          </div>
          <div className='flex justify-center gap-40'>
            <LeftsideContact />
            <RightsideContact />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact