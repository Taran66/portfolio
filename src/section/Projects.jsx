const Projects = () => {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="max-container relative ">
        <div className="flex flex-col gap-20">
          <div className="flex justify-center">
            <a href="#Services">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Projects</h2>
            </a>
          <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Projects</h3>
          </div>
          <div className="flex justify-center">
            <img src="../src/assets/social.jpg" alt="social-app" className="w-80 rounded-2xl"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects