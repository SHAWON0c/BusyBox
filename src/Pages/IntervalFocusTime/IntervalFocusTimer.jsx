import React from 'react';

const IntervalFocusTimer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/IntervalFocusTimer.mp4" type="video/mp4" />
      </video>

      {/* Text Content Overlay */}
      <div className="absolute -top-1/4 left-0 w-full h-full flex flex-col items-center justify-center text-black px-4 text-center ">
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-4">Interval Focus Timer</h1>
        <p className=" hidden sm:block text-sm sm:text-xl lg:max-w-2xl">
          BUSY Bar is an advanced productivity timer inspired by the Pomodoro technique, which divides work into short intervals — 25-minute work sessions followed by 5-minute breaks.
        </p>
        <p className='sm:hidden lg:hidden md:hidden'>BUSY Bar is an advanced productivity timer inspired by the Pomodoro technique</p>
        
      </div>
    </div>
  );
};

export default IntervalFocusTimer;
