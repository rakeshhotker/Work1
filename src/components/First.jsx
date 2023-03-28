import { Second } from ".";
// import video1 from require('../assets/WeAre.mp4');
export function First() {
  return (
    <>
      <div className="bg-black w-screen  relative sm:h-[450px]  lg:h-[800px] xsm:h-[300px]">
        <div className="flex flex-col h-full">
          <div className="w-full absolute h-full overflow-hidden">
            <video
              src="/videos/WeAre.mp4"
              autoPlay
              loop
              muted
              poster="/videos/WeAre.png"
              className=""
            />
          </div>
          <div className="text-neutral-400 2xl:text-9xl font-bold 2xl:ml-80 -z-1 opacity-50 2xl:mt-20 lg:text-8xl lg:ml-60 lg:mt-20 md:text-7xl md:ml-40 md:mt-20 sm:text-4xl sm:ml-40 sm:mt-20 xsm:text-2xl top-[100px] xsm:ml-8 xsm:mt-14">
            WeAre
            <br />
            Technology
            <br />
            Group
          </div>
          <div className="h-[600px] relative xsm:h-[150px]">
            <div className="absolute 2xl:left-[450px] 2xl:top-32 2xl:-mt-20 opacity-200 lg:left-[400px] xl:w-[450px] xl:h-[200px] lg:w-[400px] lg:h-[180px] md:w-[400px] md:h-[150px] md:left-[200px] md:mt-4 sm:w-[250px] sm:h-[140px] sm:left-[100px] sm:mt-2 sm:top-6 xsm:w-[80px] xsm:h-[80px] xsm:left-[80px] xsm:top-[10px]">
              <video
                src="/videos/Sound.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full"
              />
            </div>
            <div className="absolute 2xl:top-32 xl:left-[750px] 2xl:left-[800px] xl:top-28 lg:left-[720px] lg:top-[80px] md:left-[500px] md:text-sm md:top-[60px] xl:text-lg sm:text-sm sm:left-[300px] sm:top-[80px] xsm:text-[10px] xsm:left-[170px] xsm:top-[10px]">
              <div className="sm:w-96 lg:h-10 text-white flex flex-col justify-around sm:h-8 xl:w-[500px] xsm:w-[250px]">
                WeAreTechnology Group is a leading provider of premium iGaming
                products, platforms and management solutions. We offer a
                complete portfolio of universal technology solutions that create
                seamless experiences for our B2B and B2B2C partners worldwide.
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold xl:py-2 xl:px-4 rounded-full xl:w-32 xl:mt-5 lg:w-28 lg:h-10 lg:text-sm lg:mt-2 md:w-24 md:h-8 md:text-[10px] md:mt-[10px] sm:w-20 sm:h-6 sm:text-[8px] sm:mt-1 sm:py-0 xsm:w-[80px] xsm:py-0 xsm:px-0 xsm:h-6 xsm:mt-1">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
