import React, { useEffect, useState } from 'react';

const images = [
    '/src/assets/pomodoro-timer_1.svg',
    '/src/assets/pomodoro-timer_2.svg',
    '/src/assets/pomodoro-timer_3.svg',
    '/src/assets/pomodoro-timer_4.svg',

];

const ImageFrameCycle = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-white'>

            <div className='flex flex-row sm:w-1/2  items-center justify-center py-20 mx-auto sm:gap-10'>
                <div className='justify-center items-center'>
                    <h1 className='lg:text-5xl sm:text-2xl font-semibold py-3 sm:px-0 px-3'>New Pomodoro timer</h1>
                    <p className='lg:text-xl text-base hidden sm:block'>We’ve redesigned the classic Pomodoro timer by combining it with a distraction
                        blocker to help you stay focused and fight off
                        notifications, social media, and other brain rot while you work.</p>
                </div>
                <img className='lg:w-32 w-10' src="/src/assets/pomodoro-icon.svg" alt="" />

            </div>
            <div className=" overflow-hidden  flex items-center justify-center">
                <img
                    src={images[index]}
                    alt={`Frame ${index + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                />
            </div>

            <div className="px-4 py-10 max-w-7xl mx-auto">
                <p className="text-left text-xl lg:ml-40 lg:text-4xl my-10 font-semibold mb-8 text-gray-800">
                    We fight major focus killers
                </p>

                {/* Images Section */}
                <div className="flex sm:flex-col md:flex-row items-center justify-center gap-32  mb-10">
                    <img className="w-[100px] sm:w-[250px] md:w-[316px]" src="/src/assets/ill1.jpg" alt="Illustration 1" />
                    <img className="w-[100px] sm:w-[300px] md:w-[418px]" src="/src/assets/ill-2.svg" alt="Illustration 2" />
                </div>

                {/* Text Explanation Section */}
                <div className="flex sm:flex-col md:flex-row justify-center items-start gap-10">
                    <div className="max-w-sm text-center md:text-left">
                        <h1 className="text-xl font-bold mb-2">Endless scrolling</h1>
                        <p className="text-gray-700">
                            Brain-rotting content kills your focus. We block Instagram and TikTok while you’re in focus mode  so you can’t even open them.
                        </p>
                    </div>
                    <div className="sm:max-w-sm text-center md:text-left lg:ml-20">
                        <h1 className="text-xl font-bold mb-2">People around</h1>
                        <p className="text-gray-700">
                            Just as you manage to concentrate, someone always tries to interrupt. BUSY Bar lets others know when you’re in deep focus  and when you’ll be available again.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ImageFrameCycle;
