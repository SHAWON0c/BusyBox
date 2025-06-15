import React from 'react';

const MonoChromicScreen = () => {
    return (
        <div className="relative w-full h-auto">
            {/* This div will appear on top of the image */}
            <div className="absolute top-20 left-[600px] z-10  text-white max-w-xl">
                <h1 className="text-4xl font-bold mb-4 text-black">Monochrome back screen</h1>
                <p className="text-lg text-black">
                    Eye-friendly back screen allows you to control the device and see the status 
                    displayed on the main screen — even when it’s turned away from you.
                </p>
            </div>

            {/* Background image */}
            <img
                className="w-full h-auto"
                src="/src/assets/MonoChromicScreen.svg"
                alt="Monochrome Screen"
            />
        </div>
    );
};

export default MonoChromicScreen;
