import React from 'react';


const ManualControl = () => {
    return (
        <div>
           <div className='flex flex-col justify-center ml-96 py-20'>
  <h1 className='font-semibold text-6xl py-2'>Manual controls</h1>
  <p className='text-xl max-w-[750px]'>
    Physical buttons allow you to control the device manually without <br /> connecting to PC or the mobile app. The large buttons are designed <br /> for easy use without looking at the device.
  </p>
</div>


            <div className='flex flex-row items-center justify-end w-5/6'>

                    <div className='flex flex-row items-center w-96'>
                        <img src="/src/assets/handIcon.svg" alt="" />
                        <div className='px-8'>
                            <h2 className='font-semibold text-xl'>Start / Pause button</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-96'>
                        <img src="/src/assets/backButtonIcon.svg" alt="" />
                        <div>
                            <h2>Start / Pause button</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                        </div>
                    </div>




                </div>
            <div className='pl-32'>
               <div className=' flex flex-row items-center'>
                 <div>
                    <div className='py-10'>
                        <img 
                        className='w-[90px]'
                        src="/src/assets/busyIcon.svg" 
                        alt="" 
                        />
                        <p className='max-w-[328px]'>Main focus mode. Distraction blocker, Pomodoro timer, and status display with mobile app and smart home integrations</p>
                    </div>
                    <div className='pb-10'>
                        <img 
                        className='w-[90px]'
                        src="/src/assets/customIcon.svg" alt="" />
                        <p className='max-w-[328px]'>Your custom design status message. Bind your own BUSY workflow and automation.</p>
                    </div>
                    <div className='pb-10'>
                        <div className='flex flex-row items-center'>
                            <img
                            className='w-10' 
                            src="/src/assets/appsIcon.svg" alt="" />
                            <h1>APPs</h1>
                        </div>
                        <p className='max-w-[328px]'>Clock, weather, social media stats (YouTube, Instagram, TikTok), and more. Supports 3rd-party user applications.</p>
                    </div>
                    <div>
                        <div className='flex flex-row items-center'>
                            <img
                            className='w-10' 
                            src="/src/assets/settingicon.svg" alt="" />
                            <h1>Settings</h1>
                        </div>
                        <p className='max-w-[328px]'>Wi-Fi / Bluetooth connections, screen brightness, sound volume, power saving mode, etc.</p>
                    </div>

                </div>
                


                <div className="flex items-center justify-end px-32">
                    <img
                        className="w-11/12"
                        src="/src/assets/ManualControl.png"
                        alt="Manual Control"
                    />
                </div>
               </div>

                

            </div>
  <div className='flex flex-row items-center justify-end w-5/6'>

                    <div className='flex flex-row items-center w-96'>
                        <img src="/src/assets/handIcon.svg" alt="" />
                        <div className='px-8'>
                            <h2 className='font-semibold text-xl'>Start / Pause button</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center w-96'>
                        <img src="/src/assets/backButtonIcon.svg" alt="" />
                        <div>
                            <h2>Start / Pause button</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nesciunt.</p>
                        </div>
                    </div>




                </div>
        </div>
    );
};

export default ManualControl;