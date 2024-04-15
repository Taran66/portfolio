import { Project } from "../constants"

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
          <div className="flex gap-20 justify-center">
          {Project.map((item)=>(
              <div className="flex relative w-96 group bg-slate-900 hover:shadow-2xl hover:shadow-black transition-all duration-300 ease-in-out hover:scale-105">
                    <img
                      src={item.image}
                      alt="social-app"
                      className="rounded-2xl group-hover:opacity-50 transition-opacity duration-300"
                    />
                    <p className="absolute bottom-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.paragh}
                    </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects