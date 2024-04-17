import React from 'react'
import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegram} from 'react-icons/fa';

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
          <div className='flex gap-40'>
          <div className='text-white flex flex-col gap-20 '>
              <h2 className='text-7xl'>Contact Me</h2>
              <FaTelegram className='text-4xl'/>
              <FaPhoneAlt className='text-4xl'/>
              <div className='flex text-4xl gap-20'>
                <a href="https://www.instagram.com/_taran._.singh_/">
                  <FaInstagram className='hover:-translate-y-2 hover:text-amber-400 duration-300 ease-in-out' />
                </a>
                <a href="https://www.linkedin.com/in/taran-saini/">
                  <FaLinkedinIn className='hover:-translate-y-2 hover:text-amber-400 duration-300 ease-in-out'/>
                </a>
              </div>
              <button className='text-3xl bg-amber-400 rounded-md w-8/12 p-3 hover:text-slate-950'>Download CV</button>
          </div>
          <div className='flex w-96'>
            <form className='flex flex-col gap-10 w-full'>
              <input type="text" className='rounded-lg h-12'/>
              <input type="text" className='rounded-lg h-12'/>
              <textarea className='h-48 rounded-lg'/>
            </form>
          </div>
        </div>
        </div>
        
        
      </div>
    </div>
        
    </div>
  )
}

export default Contact