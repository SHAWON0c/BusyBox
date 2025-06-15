import React from 'react';
import imgProductivity from "../../assets/productivity.svg";
import imgApps from "../../assets/apps.svg";
import imgSmartHome from "../../assets/SmartHome.svg";
import imgDeveloper from "../../assets/DevFriendly.svg";
const Featured = () => {

    const featureImages = [imgProductivity, imgApps, imgSmartHome, imgDeveloper];
    const featureTitles = [
        "Productivity Tool",
        "Apps & Integration",
        "Smart Home Support",
        "Developer Friendly",
    ];
    const featureDescriptions = [
        "Distraction blocker, custom BUSY message, focus timer, cross-platform sync",
        "App Library, connection to 3rd-party software, integrations with calendar events and calls",
        "Connect to Google Home and Apple Home via the Matter protocol",
        "Open HTTP API, open-source SDK, Python / Go / JavaScript libs, MQTT, no vendor lock-in",
    ];
    return (
        <div>
            <div className="w-full relative px-10 sm:px-10 lg:px-32 z-20 lg:-mt-40 sm:mt-10 mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-xl place-items-start">
                    {featureImages.map((img, i) => (
                        <div key={i} className="flex items-start gap-[6px]">
                            <img src={img} alt="" className="w-5 h-5 sm:w-16 sm:h-16" />
                            <div>
                                <p className="font-semibold text-gray-800 text-sm sm:text-base whitespace-nowrap flex items-start ">
                                    {featureTitles[i]}
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm text-left">
                                    {featureDescriptions[i]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Featured;