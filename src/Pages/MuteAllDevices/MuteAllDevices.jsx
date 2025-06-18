import React from 'react';

const MuteAllDevices = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">


            <div className="sm:hidden  justify-center items-center relative z-10 w-full h-full text-black px-32 py-20">
                <h1 className="text-2xl font-base mb-2">Mute all devices</h1>
            </div>

            {/* Desktop Video */}
            <video
                className=" hidden sm:block absolute sm:top-0 items-center mx-80 w-3/4  sm:h-[1000px] object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/src/assets/mute_all_devices.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video */}
            <video
                className="block sm:hidden absolute -top-20 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/src/assets/mute_all_devices_mobile.mp4" type="video/mp4" />
            </video>

            {/* Content Overlay */}
            <div className=" sm:bottom-56 relative z-10 w-full h-full flex flex-col justify-center items-center sm:items-start text-black px-6 sm:px-60">
                {/* Desktop Text */}
                <div className="hidden sm:block text-left">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Mute all devices
                    </h1>
                    <p className="text-sm sm:text-xl max-w-xl mb-4">
                        BUSY Bar integrates with the free cloud-based BUSY App infrastructure.
                    </p>
                    <p className="text-sm sm:text-xl max-w-xl">
                        Block distractions across all platforms simultaneously, so nothing pulls you away while you’re focused. BUSY App works on your computer, phone, and smartwatch.
                    </p>
                </div>

                {/* Mobile Text */}

                
                

            </div>
        </div>
    );
};

export default MuteAllDevices;
