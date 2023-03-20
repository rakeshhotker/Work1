export function Second() {
  return (
    <>
      <div className="w-11/12 h-[800px] flex justify-around bg-transparent -mt-40 ml-10 mr-10 relative rounded-xl sm:absolute sm:ml-0 sm:mt-5">
        <div className="absolute ml-10 top-20 sm:top-[10px] sm:-mt-96">
          <video src="/videos/WhatWe.mp4" autoPlay loop muted />
        </div>
        <div className="flex flex-col justify-around z-10 sm:w-[60px] sm:absolute sm:left-[70px] sm:-top-96 sm:h-[200px] sm:w-[50px]">
          <div className="font-bold text-sky-900 text-5xl text-start sm:text-[10px]">
            What we do
          </div>
          <div className="text-justify w-96 h-16 leading-6 sm:text-[7px] sm:w-[100px] sm:h-[60px] sm:leading-none sm:text-snug sm:text-[5px]">
            WeAreTechnology Group is a market leader in the design and
            development of innovative mass market technology solutions. Through
            continued distribution, we deliver higher lifetime value and
            recurring revenue for our B2B and B2B2C partners.
          </div>
        </div>
        <div className="flex flex-col justify-around z-10 sm:w-[70px] sm:absolute sm:left-[240px] sm:-top-96 sm:h-[200px] sm:w-[50px]">
          <div className="text-justify w-96 h-16 leading-6 sm:text-[7px] sm:w-[100px] sm:h-[60px] sm:leading-none sm:text-snug sm:text-[5px]">
            WATG puts continued engagement and cutting-edge content creation at
            the heart of product delivery across multiple verticals, targeting
            emerging territories. We create new opportunities for partners to
            engage consumers and drive revenue growth through continued
            commitment within these markets.
          </div>
          <div className="font-bold text-sky-900 text-5xl sm:text-[10px]">
            Group Values
          </div>
        </div>
      </div>
    </>
  );
}
