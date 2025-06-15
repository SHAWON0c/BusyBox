import React from 'react';
import image2 from "../../assets/image2.jpg";

const Productivity = () => {
    const cards = [
        {
            title: "🚫 BUSY focus timer",
            subtitle: "Pomodoro timer and distraction blocker for deep focus workflow",
            points: [
                "Notification blocker on iPhone / Android",
                "Integration with 3rd-party apps",
                "Customizable BUSY automations",
                "Smart Home integration",
            ],
        },
        {
            title: "🪧 Custom status",
            subtitle: "Design your own BUSY status message",
            points: [
                "Display LED status: choose from the library or create a custom one",
                "Add a timer for focused work: simple or interval",
                "Auto-activation by microphone, camera, or app",
            ],
        },
        {
            title: ">_ Developer-friendly",
            subtitle: "Developers can integrate BUSY Bar into any system using Open API",
            points: [
                "> Open HTTP API",
                "> Libs for Python/JavaScript/Go",
                "> Offline API (no internet required)",
                "> USB Virtual LAN",
                "> Web interface over USB and Wi-Fi",
                
                "> Self-hosted cloud control",
                "> Apps for macOS, iOS and Android",
            ],
        },
    ];

    return (
        <div className='lg:mt-32 sm:mt-20 mt-5 text-center'>
            <h1 className='text-black lg:text-5xl sm:text-3xl text-xl mb-6'>Productivity Multi-tool</h1>

            <div className='flex justify-center'>
                <img
                    className='lg:w-4/6 w-full p-5 object-contain'
                    src={image2}
                    alt="Productivity"
                    loading="lazy"
                />
            </div>

            <div className="bg-[#f8f8fa] py-12 px-6 sm:px-10 lg:px-20 flex justify-center">
                <div className="flex flex-col lg:flex-row gap-6 text-left">
                    {cards.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white max-w-[500px] max-h-[350px] shadow-md p-6 rounded-3xl flex-1 ${
                                index === 2 ? 'border border-gray-300 bg-[#F5F5F7]' : ''
                            }`}
                        >
                            <h2 className={`text-4xl font-semibold mb-2 ${
                                index === 2 ? 'text-sm font-mono bg-white border-red-600 text-black px-4 py-2 rounded w-fit' : ''
                            }`}>
                                {feature.title}
                            </h2>

                            <p className={`text-gray-800 mb-4 text-2xl ${
                                index === 2 ? 'font-mono bg-[#F5F5F7]' : ''
                            }`}>
                                {feature.subtitle}
                            </p>

                            <ul className={`text-lg text-gray-600 ${
                                index === 2
                                    ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-3 font-mono text-sm bg-[#F5F5F7]'
                                    : 'list-disc list-inside space-y-1 text-left '
                            }`}>
                                {feature.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Productivity;
