// import { Project } from "../constants"

// const Projects = () => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="max-container relative ">
//         <div className="flex flex-col gap-20">
//           <div className="flex justify-center">
//             <a href="#Projects">
//               <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Projects</h2>
//             </a>
//           <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Projects</h3>
//           </div>
//           <div className="flex gap-20 justify-center ">
//           {Project.map((item)=>(
//               <div className=" flex flex-col justify-between items-center gap-10 bg-slate-900 p-10 rounded-3xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out hover:scale-105 rounded-3xl">
//                     <img
//                       src={item.image}
//                       alt="website-image"
//                       width={300}
//                     />
//                     <div className="">
//                       <a href="">
//                         <h6 className="text-amber-400 text-2xl">{item.projectName}</h6>
//                       </a>
//                       <br />
//                       {/* <p className="">
//                         {item.paragh}
//                       </p> */}
//                     </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Projects

import { Project } from "../constants";

const Projects = () => {
  return (
    <div className="min-h-screen py-16 md:py-24 flex justify-center items-center px-4 md:px-6">
      <div className="max-container relative w-full">
        <div className="flex flex-col gap-10 md:gap-20">
          {/* Title Section */}
          <div className="flex justify-center relative">
            <a href="#Projects">
              <h2 className="text-slate-800 text-5xl md:text-6xl lg:text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">
                Projects
              </h2>
            </a>
            <h3 className="text-center text-amber-400 z-20 text-2xl md:text-3xl lg:text-4xl absolute top-0">
              Projects
            </h3>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20 justify-center">
            {Project.map((item) => (
              <div 
                key={item.projectName}
                className="flex flex-col justify-between items-center gap-6 md:gap-10 bg-slate-900 p-6 md:p-10 rounded-3xl hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="w-full overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.projectName}
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-center w-full">
                  <a 
                    href={item.link} 
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <h6 className="text-amber-400 text-xl md:text-2xl font-semibold">
                      {item.projectName}
                    </h6>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;