import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTelegramPlane} from 'react-icons/fa';

const LeftsideContact = () => {
  return (
    <div className='text-white flex flex-col justify-between '>
        <h2 className='text-7xl'>Contact Me</h2>
        <div className='flex gap-10 items-center'>
            <FaTelegramPlane className='text-4xl'/>
            <p className='text-2xl'>contact@example.com</p>
            </div>
            <div className='flex gap-10 items-center'>
            <FaPhoneAlt className='text-4xl'/>
            <p className='text-2xl'>+0123456789</p>
        </div>
        <div className='flex text-4xl gap-20'>
        <a href="https://www.instagram.com/_taran._.singh_/">
            <FaInstagram className='hover:-translate-y-2 hover:text-amber-400 duration-300 ease-in-out' />
        </a>
        <a href="https://www.linkedin.com/in/taran-saini/">
            <FaLinkedinIn className='hover:-translate-y-2 hover:text-amber-400 duration-300 ease-in-out'/>
        </a>
        </div>
        <button type='submit' className='text-3xl bg-amber-400 rounded-md w-8/12 p-3 text-black hover:bg-amber-500 duration-500 ease-in-out'>Download CV</button>
    </div>
  )
}

export default LeftsideContact