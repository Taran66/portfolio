// import React from 'react'
// import LeftsideContact from '../components/LeftsideContact';
// import RightsideContact from '../components/RightsideContact';

// const Contact = () => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="max-container relative w-screen flex justify-center">
//         <div className="flex justify-center flex-col gap-20 w-full">
//           <div className="flex justify-center">
//             <a href="#Contact">
//               <h2 className="text-slate-800 text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-5">Contact</h2>
//             </a>
//             <h3 className="text-center text-amber-400 z-20 text-4xl absolute top-0">Contact</h3>
//           </div>
//           <div className='flex justify-center gap-40'>
//             <LeftsideContact />
//             <RightsideContact />
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Contact

// Contact.jsx

import React from 'react';
import LeftsideContact from '../components/LeftsideContact';
import RightsideContact from '../components/RightsideContact';

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center p-4 md:p-0">
      <div className="max-w-6xl w-full relative flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        <div className="flex justify-center flex-col gap-10 w-full text-center md:text-left">
          {/* Title */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#Contact" className="relative">
              <h2 className="text-slate-800 text-4xl md:text-6xl lg:text-8xl z-10 hover:text-amber-400 hover:blur-sm transition-all duration-500 ease-in-out hover:translate-y-2 md:hover:translate-y-5">Contact</h2>
              <h3 className="text-amber-400 text-2xl md:text-4xl absolute top-0 transform -translate-y-1/2 md:translate-y-0">Contact</h3>
            </a>
          </div>
          {/* Contact Sections */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            <LeftsideContact />
            <RightsideContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
