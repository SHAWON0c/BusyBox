import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Featured from '../FeaturedSection/Featured';
import Productivity from '../ProductivitySection/Productivity';
import ShowBusy from '../ShowSection/ShowBusy';
import Test from '../TestSection/test';
import AutomaticBusy from '../AutomaticBusySection/AutomaticBusy';
import Svg from '../../Shared/svg';
import ManualControl from '../ManualControl/ManualControl';
import MonoChromicScreen from '../MonoChromicScreen/MonoChromicScreen';
import IntervalFocusTimer from '../IntervalFocusTime/IntervalFocusTimer';
import ImageFrameCycle from '../../Shared/ImageFrameCycle';
import BlockDistractions from '../BlockDistraction/BlockDistractions';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Featured></Featured>
            <Productivity></Productivity>
            <ShowBusy></ShowBusy>
            <AutomaticBusy></AutomaticBusy>
            
            <ManualControl></ManualControl>
            <MonoChromicScreen></MonoChromicScreen>
            <IntervalFocusTimer></IntervalFocusTimer>
            <ImageFrameCycle></ImageFrameCycle>
            <BlockDistractions></BlockDistractions>
            <Test></Test>
        </div>
    );
};

export default Home;