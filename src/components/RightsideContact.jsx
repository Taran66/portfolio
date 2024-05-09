import { useState } from "react"

const RightsideContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    console.log('Form Data:', { name, email });
    
    setName('');
    setEmail('');
  };
  
  return (
    <div className='flex justify-center w-6/12'>
        <form className='flex flex-col justify-between w-10/12'>
            <input type="text" className='rounded-lg outline-none text-xl p-3 text-black' value={name} onChange={handleNameChange} placeholder='Your Name'/>
            <input type="email" className='rounded-lg outline-none text-xl p-3 text-black' value={email} onChange={handleEmailChange} placeholder='Your Email'/>
            <textarea className='h-32 rounded-lg outline-none text-xl p-3 text-black' placeholder='Your Message'/>
            <button type='submit' className='text-3xl bg-amber-400 rounded-md p-3 text-black hover:bg-amber-500 duration-300 ease-in-out' onSubmit={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default RightsideContact