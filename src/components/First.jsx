import { Second } from ".";
// import video1 from require('../assets/WeAre.mp4');
export function First() {
  return (
    <>
      <div className="bg-slate-900 w-screen">
        <div className="flex flex-col h-full">
          <div className="h-full w-100 absolute ">
            <video
              src="/videos/WeAre.mp4"
              autoPlay
              loop
              muted
              poster="/videos/WeAre.png"
            />
          </div>
          <div className="text-neutral-400 text-9xl font-bold ml-80 mt-20 mt-20 -z-1 opacity-50 sm:ml-0 sm:absolute sm:text-4xl sm:left-4">
            WeAre
            <br />
            Technology
            <br />
            Group
          </div>
          <div className="h-[600px] relative">
            <div className="absolute left-[450px] top-32 -mt-20 opacity-200 sm:w-[50px] sm:h-[50px] sm:left-[160px] sm:top-14 ">
              <video
                src="/videos/Sound.mp4"
                autoPlay
                loop
                style={{
                  width: "500px",
                  height: "250px",
                }}
                muted
                className=""
              />
            </div>
            <div className="absolute left-[850px] top-32 sm:left-[225px]">
              <div className="w-96 h-10 text-white flex flex-col justify-around sm:text-sm sm:w-[200px] sm:text-[6px] sm:h-[20px]">
                WeAreTechnology Group is a leading provider of premium iGaming
                products, platforms and management solutions. We offer a
                complete portfolio of universal technology solutions that create
                seamless experiences for our B2B and B2B2C partners worldwide.
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32 mt-5 sm:w-[70px] sm:h-[30px] sm:px-0 sm:py-1">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </div>
        <Second />
      </div>
    </>
  );
}
