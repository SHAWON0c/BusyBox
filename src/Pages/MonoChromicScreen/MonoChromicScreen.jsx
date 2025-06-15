import React from 'react';

const MonoChromicScreen = () => {
    return (
        <div className="relative w-full h-auto">
            {/* Overlay text container */}
            <div className="absolute z-10 text-white max-w-xl px-4 
                            top-10  transform lg:-translate-x-3/4 
                            sm:top-16 md:top-20 lg:left-2/3">
                <h1 className="text-lg sm:text-4xl md:text-4xl font-bold mb-4 text-black text-center mx-16 sm:mx-0 lg:mx-0 md:text-left">
  Monochrome back screen
</h1>

                <p className=" hidden sm:block text-base sm:text-2xl text-black text-center md:text-left">
                    Eye-friendly back screen allows you to control the device and see the status 
                    displayed on the main screen — even when it’s turned away from you.
                </p>
            </div>

            {/* Background image */}
            <img
                className="w-full h-auto transform  transition-transform duration-500"
                src="/src/assets/MonoChromicScreen.svg"
                alt="Monochrome Screen"
            />
        </div>
    );
};

export default MonoChromicScreen;
