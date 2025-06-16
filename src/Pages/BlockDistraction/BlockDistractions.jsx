import React from 'react';

const BlockDistractions = () => {
    return (
        <div>
            <div className="relative w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/Block_Distractions.mp4" type="video/mp4" />
      </video>

      {/* Text Content Overlay */}
      <div className="absolute -top-24  sm:left-1/2 w-full h-full flex flex-col  justify-center text-black px-4 text-left ">
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-10">Block distractions</h1>
        <p className=" hidden sm:block text-sm sm:text-xl lg:max-w-2xl">
          BUSY Bar can automatically mute notifications on your phone and PC when BUSY mode is activated. It helps you stay focused by blocking distractions as you work.
        </p>
        <div className='mt-20 items-center w-full justify-end ml-44 sm:ml-0'>
            <p className='mb-2 sm:text-base tex-sm  sm:w-full w-36'>Requires BUSY App integration (available for free):</p>
            <div className='flex flex-row sm:gap-10 gap-2 -left-10 '>
                <img className='hover:scale-110 sm:w-36 w-20 ' src="/src/assets/google-play-neutral.svg" alt="" />
                <img className='hover:scale-110 sm:w-36 w-20' src="/src/assets/app-store-neutral.svg" alt="" />
            </div>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default BlockDistractions;