import React from 'react';
import automaticBuys from '../../assets/AutomaticBusy.jpg';
import mic from '../../assets/mic_icon.svg'

const AutomaticBusy = () => {
  return (
    <div className="relative w-full lg:max-h-[1100px] overflow-hidden bg-white flex lg:flex-row flex-col order-1 lg:order-2">

      {/* Background image */}
      <img
        src={automaticBuys}
        alt="Automatic Busy"
        className="lg:w-full lg:h-full object-cover object-top pt-60 lg:mx-40"
      />

      {/* Title centered at top */}
      <div className="absolute top-10 lg:top-28 w-4/6 lg:w-3/6 left-1/2 transform -translate-x-1/2 z-20">
        <h1 className=" text-2xl sm:2xl lg:text-7xl w-full font-sm text-black lg:px-4 lg:py-2">
          Automatic BUSY status
        </h1>
      </div>

      {/* Text content on left overlay */}
     <div className="lg:absolute lg:top-0 lg:left-0 lg:h-full w-full z-10 flex flex-col lg:flex-row order-2 lg:order-1 mt-10 lg:my-96 items-center lg:items-start">

        <div className="bg-opacity-70 p-6 lg:max-w-2xl lg:ml-36 rounded">
          <p className="text-black text-xl lg:mb-10 ">
            BUSY Bar integrates with desktop software and automatically <br />activates when you’re on a call, live on stream,
            recording audio, <br /> or when a certain program is active.
          </p>
          <div className=''>
            <div className='flex flex-row space-x-2 my-10'>
            <img className='w-12 h-12' src={mic} alt="" />
            <div className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Automatic ON CALL status</h2>
              <p className='text-gray-400'>When the microphone is activated on your computer, BUSY Bar will automatically display an ON CALL status.</p>
            </div>
          </div>
          <div className='flex flex-row space-x-2 my-10'>
            <img className='w-12 h-12' src={mic} alt="" />
            <div className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Automatic ON CALL status</h2>
              <p className='text-gray-400'>When the microphone is activated on your computer, BUSY Bar will automatically display an ON CALL status.</p>
            </div>
          </div>
          <div className='flex flex-row space-x-2 my-10'>
            <img className='w-12 h-12' src={mic} alt="" />
            <div className='flex flex-col'>
              <h2 className='text-xl font-semibold'>Automatic ON CALL status</h2>
              <p className='text-gray-400'>When the microphone is activated on your computer, BUSY Bar will automatically display an ON CALL status.</p>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 to-transparent z-10" />
    </div>
  );
};

export default AutomaticBusy;
