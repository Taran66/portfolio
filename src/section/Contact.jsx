import React from 'react'
import LeftsideContact from '../components/LeftsideContact';
import RightsideContact from '../components/RightsideContact';

const Contact = () => {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="max-container relative w-screen flex justify-center">
        <div className="flex justify-center flex-col gap-20 w-full">
          <div className='flex justify-center gap-40 h-'>
            <LeftsideContact />
            <RightsideContact />
          </div>
        </div>
        
        
      </div>
    </div>
        
  )
}

export default Contact