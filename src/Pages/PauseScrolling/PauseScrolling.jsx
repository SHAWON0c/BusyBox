import React from 'react';

const PauseScrolling = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#F9F9FB]">

            <div className='mt-4 sm:hidden '>
                <div className="w-full sm:w-2/3 mb-10 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Pause scrolling
                    </h1>
                    <p className="text-sm sm:text-xl max-w-60 mx-auto sm:mx-0">
                        Short videos on TikTok and Instagram flood you with dopamine, making it hard to focus.
                        BUSY App can block these apps while you’re in deep focus.
                    </p>
                </div>
            </div>
            {/* Video Background */}
            <video
                className="absolute sm:top-0 items-center mx-20 sm:mx-56 sm:-right-1/4 w-3/4  sm:h-[1000px] object-cover z-0"
        
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/src/assets/PauseScrolling.mp4" type="video/mp4" />
            </video>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center sm:items-start items-center px-4 sm:px-32 text-black">
                {/* Heading + Paragraph */}
                <div className=" hidden sm:block  w-full sm:w-2/3 mb-10 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Pause scrolling
                    </h1>
                    <p className="text-sm sm:text-xl max-w-xl mx-auto sm:mx-0">
                        Short videos on TikTok and Instagram flood you with dopamine, making it hard to focus.
                        BUSY App can block these apps while you’re in deep focus.
                    </p>
                </div>

                {/* Feature Items */}
                <div className="grid grid-cols-1 sm:grid-row-2 gap-8 sm:gap-16 w-full max-w-4xl ">
                    {/* Block Any App */}
                    <div className="flex items-start gap-3">
                        <img className="w-6 mt-1" src="/src/assets/lockicon.svg" alt="Block icon" />
                        <div>
                            <h2 className="text-md sm:text-lg font-bold">Block any app</h2>
                            <p className="text-sm sm:text-base text-gray-800 max-w-sm">
                                Select the apps you want to block during focus mode. You’ll stop receiving notifications and won’t be able to open these apps until the timer runs out.
                            </p>
                        </div>
                    </div>

                    {/* Hardcore Mode */}
                    <div className="flex items-start gap-3">
                        <img className="w-6 mt-1" src="/src/assets/hardcore.svg" alt="Hardcore icon" />
                        <div>
                            <h2 className="text-md sm:text-lg font-bold">Hardcore mode (optional)</h2>
                            <p className="text-sm sm:text-base text-gray-800 max-w-sm">
                                Locks apps for the entire focus session with no way to bypass it. The only way to unlock them is a full phone reset.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PauseScrolling;
