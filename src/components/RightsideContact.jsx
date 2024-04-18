const RightsideContact = () => {
  return (
    <div className='flex w-6/12'>
        <form className='flex flex-col justify-between  w-full'>
            <input type="text" className='rounded-lg outline-none text-2xl p-3' placeholder='Your Name'/>
            <input type="email" className='rounded-lg outline-none text-2xl p-3' placeholder='Your Email'/>
            <textarea className='h-36 rounded-lg outline-none text-2xl p-3' placeholder='Your Message'/>
            <button type='submit' className='text-3xl bg-amber-400 rounded-md p-3 text-black hover:bg-amber-500 duration-300 ease-in-out'>Submit</button>
        </form>
    </div>
  )
}

export default RightsideContact