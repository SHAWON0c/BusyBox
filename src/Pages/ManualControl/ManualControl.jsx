import React from 'react';

const ManualControl = () => {
    return (
        <div className="px-4 md:px-10 lg:px-24 py-10 space-y-12">
            {/* Top Text Section */}
            <div className='flex flex-col justify-center md:ml-20 lg:ml-96 py-10'>
                <h1 className='font-semibold text-3xl md:text-5xl lg:text-6xl py-2'>Manual controls</h1>
                <p className='text-base md:text-lg max-w-[750px]'>
                    Physical buttons allow you to control the device manually <br className="hidden md:block" />
                    without connecting to PC or the mobile app. The large buttons are designed <br className="hidden md:block" />
                    for easy use without looking at the device.
                </p>
            </div>

            {/* First Row of Controls */}
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 w-full md:w-5/6 '>
                <div className='flex flex-row items-center w-full md:w-96'>
                    <img className="w-12 md:w-auto" src="/src/assets/handIcon.svg" alt="" />
                    <div className='px-4 md:px-8'>
                        <h2 className='font-semibold text-lg md:text-xl'>Start / Pause button</h2>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full md:w-96'>
                    <img className="w-12 md:w-auto" src="/src/assets/backButtonIcon.svg" alt="" />
                    <div className='px-4 md:px-8'>
                        <h2 className='font-semibold text-lg md:text-xl'>Back button</h2>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                    </div>
                </div>
            </div>

            {/* Middle Section: Features + Image */}
            <div className='pl-4 md:pl-10 lg:pl-10 flex flex-col lg:flex-row gap-10'>
                {/* Left Info Blocks */}
                <div>
                    <div className='pb-6'>
                        <img className='w-[70px] md:w-[90px] lg:pb-1' src="/src/assets/busyIcon.svg" alt="" />
                        <p className='max-w-[328px] text-sm md:text-base'>
                            Main focus mode. Distraction blocker, Pomodoro timer, and status display with mobile app and smart home integrations
                        </p>
                    </div>
                    <div className='pb-6'>
                        <img className='w-[70px] md:w-[90px] lg:pb-1' src="/src/assets/customIcon.svg" alt="" />
                        <p className='max-w-[328px] text-sm md:text-base'>
                            Your custom design status message. Bind your own BUSY workflow and automation.
                        </p>
                    </div>
                    <div className='pb-6'>
                        <div className='flex flex-row items-center gap-2 '>
                            <img className='w-8 md:w-10' src="/src/assets/appsIcon.svg" alt="" />
                            <h1 className='font-semibold text-sm md:text-base'>APPs</h1>
                        </div>
                        <p className='max-w-[328px] text-sm md:text-base'>
                            Clock, weather, social media stats (YouTube, Instagram, TikTok), and more. Supports 3rd-party user applications.
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row items-center gap-2'>
                            <img className='w-8 md:w-10' src="/src/assets/settingicon.svg" alt="" />
                            <h1 className='font-semibold text-sm md:text-base'>Settings</h1>
                        </div>
                        <p className='max-w-[328px] text-sm md:text-base'>
                            Wi-Fi / Bluetooth connections, screen brightness, sound volume, power saving mode, etc.
                        </p>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex items-center justify-center lg:justify-end px-4 md:px-10 lg:px-0">
                    <img className="w-full" src="/src/assets/ManualControl.png" alt="Manual Control" />
                </div>
            </div>

            {/* Bottom Row of Controls */}
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 w-full md:w-5/6 px-4'>
                <div className='flex flex-row items-center w-full md:w-96'>
                    <img className="w-12 md:w-auto" src="/src/assets/handIcon.svg" alt="" />
                    <div className='px-4 md:px-8'>
                        <h2 className='font-semibold text-lg md:text-xl'>Start / Pause button</h2>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                    </div>
                </div>

                <div className='flex flex-row items-center w-full md:w-96'>
                    <img className="w-12 md:w-auto" src="/src/assets/backButtonIcon.svg" alt="" />
                    <div className='px-4 md:px-8'>
                        <h2 className='font-semibold text-lg md:text-xl'>Back button</h2>
                        <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManualControl;
