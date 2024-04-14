import { Service } from "../constants"

const Services = () => {
  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="max-container relative flex flex-col gap-10">
        <div className="flex justify-center flex-col gap-20">
          <div className="flex justify-center">
            <a href="#Services">
              <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Services</h2>
            </a>
          <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Services</h3>
          </div>
          <div className="flex text-white gap-20">
              {Service.map((item)=> (
                <div className="flex flex-col gap-10 bg-slate-950 justify-between items-center hover:shadow-2xl hover:shadow-black transition-all duration-300 ease-in-out hover:scale-105 rounded-3xl p-10">
                    <img src={item.image} alt="#" className="w-56"/>
                    <div className="flex flex-col gap-4">
                      <h2 className="text-amber-400 text-2xl">{item.heading}</h2>
                      <p className="text-justify">{item.paragh}</p>
                    </div>
                </div>
                
              ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services