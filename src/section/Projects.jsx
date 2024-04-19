import { Project } from "../constants"

const Projects = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-container relative ">
        <div className="flex flex-col gap-20">
          <div className="flex justify-center">
            <a href="#Services">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Projects</h2>
            </a>
          <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Projects</h3>
          </div>
          <div className="flex gap-20 justify-center ">
          {Project.map((item)=>(
              <div className=" flex flex-col justify-between items-center gap-10 bg-slate-900 p-10 rounded-3xl hover:shadow-2xl hover:shadow-amber-500 transition-all duration-300 ease-in-out hover:scale-105 rounded-3xl">
                    <img
                      src={item.image}
                      alt="website-image"
                      width={300}
                    />
                    <div className="">
                      <a href="">
                        <h6 className="text-amber-400 text-2xl">{item.projectName}</h6>
                      </a>
                      <br />
                      <p className="">
                        {item.paragh}
                      </p>
                    </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects