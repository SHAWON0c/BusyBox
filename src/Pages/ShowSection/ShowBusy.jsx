import React from 'react';
import showbusy from '../../assets/Show_Busy.mp4';
import activator from '../../assets/activatior.png';
import timer from '../../assets/timer.png';
import OnAir from '../../assets/OnAir.jpg'

const ShowBusy = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row relative bg-[#FFFFFF]">

                {/* Text section - overlays on mobile, normal on lg */}
                <div className="absolute top-96 z-10 w-full h-full bg-white bg-opacity-80 
                            flex-1 flex flex-col justify-center 
                            lg:relative lg:top-auto lg:z-auto lg:w-auto lg:h-auto 
                            lg:p-36 p-5 order-2 lg:order-1">

                    <div className='lg:mb-8'>
                        <h1 className="text-3xl font-semibold lg:text-6xl sm:text-3xl mb-4">
                            Show you are BUSY
                        </h1>
                        <p className="font-strong lg:text-2xl text-gray-700">
                            Stop others from interrupting your deep focus. The display shows you’re busy and when you’ll be free again.
                        </p>
                    </div>

                    <div className='lg:space-y-6 space-y-0'>
                        {/* Feature 1 */}
                        <div className="flex flex-row items-center gap-4">
                            <img className="w-auto lg:h-40 h-14 object-contain" src={activator} alt="activator" />
                            <div className="flex flex-col justify-end mt-14">
                                <h2 className="lg:text-3xl font-semibold mb-1">Instant activation</h2>
                                <p className="text-gray-600 lg:text-lg">
                                    Start and stop the BUSY status manually with a large button. Works completely offline, with no extra software required.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-row items-center gap-4">
                            <img className="w-auto lg:h-40 h-14 object-contain" src={activator} alt="activator" />
                            <div className="flex flex-col justify-end mt-10">
                                <h2 className="lg:text-3xl font-semibold mb-1">Instant activation</h2>
                                <p className="text-gray-600 lg:text-lg">
                                    Start and stop the BUSY status manually with a large button. Works completely offline, with no extra software required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video section - full width on mobile, right side on lg */}
                <div className="order-1 lg:order-2 flex justify-left w-full lg:w-1/2">
                    <video
                        className="w-full h-screen object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={showbusy} type="video/mp4" />
                    </video>
                </div>



            </div>
            {/* Full-width image below */}
            <div className="w-full">
                <img src={OnAir} alt="On Air" className="w-full h-[90vh] object-cover" />
            </div>


        </>
    );
};

export default ShowBusy;
