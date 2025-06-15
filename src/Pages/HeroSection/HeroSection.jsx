import video from "../../assets/HeroSectionVideo.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden
      h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-screen
      flex items-center justify-center px-4 sm:px-8"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl text-center text-white sm:pt-20 pt-32">
        <p className="text-black text-sm sm:text-base md:text-xl font-normal">
          <span className="text-xl font-bold">BusyBox</span> A productivity multi-tool device with an LED pixel display. Focus timer with distraction blocking feature on your phone and PC. Fully customizable, open-source, and smart home ready.
        </p>

        <div className="mt-6 mb-4">
          <button className="lg:px-8 lg:py-3 sm:py-4 sm:px-4 px-3 py-2 bg-orange-600 text-white hover:bg-black rounded-md font-medium transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
