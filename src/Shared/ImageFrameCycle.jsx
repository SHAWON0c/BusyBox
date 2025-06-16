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

            <div className='flex flex-row w-1/2  items-center justify-center py-10 mx-auto'>
                <div className='justify-center items-center'>
                    <h1>New Pomodoro timer</h1>
                    <p>We’ve redesigned the classic Pomodoro timer by combining it with a distraction 
                        blocker to help you stay focused and fight off 
                        notifications, social media, and other brain rot while you work.</p>
                </div>
                <img src="/src/assets/pomodoro-icon.svg" alt="" />

            </div>
            <div className=" overflow-hidden  flex items-center justify-center">
            <img
                src={images[index]}
                alt={`Frame ${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
            />
        </div>
        </div>
    );
};

export default ImageFrameCycle;
