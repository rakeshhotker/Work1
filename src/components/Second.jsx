export function Second() {
  return (
    <>
      <div className="w-11/12 h-[800px] flex justify-around bg-transparent xl:-mt-40 mx-auto relative lg:-mt-60 md:-mt-96 sm:-mt-[550px]">
        <div className="">
          <video
            src="/videos/WhatWe.mp4"
            autoPlay
            loop
            muted
            className="rounded-xl w-full h-full top-0 left-0 right-0 bottom-0 absolute"
          />
        </div>
        <div className="justify-around z-10">
          <div className="font-bold text-sky-900 xl:text-5xl text-start lg:text-4xl absolute lg:top-32 lg:left-32 md:text-3xl md:top-40 md:left-28 sm:left-24 sm:top-56 sm:text-xl">
            What we do
          </div>
          <div className="xl:w-96 xl:h-16 xl:leading-6 lg:w-80 lg:h-18 lg:top-[500px] absolute lg:left-32 md:top-[400px] md:left-28 md:w-72 md:text-md sm:left-24 sm:w-64 sm:text-sm sm:top-[400px] text-justify lg:text-[15px]">
            WeAreTechnology Group is a market leader in the design and
            development of innovative mass market technology solutions. Through
            continued distribution, we deliver higher lifetime value and
            recurring revenue for our B2B and B2B2C partners.
          </div>
        </div>
        <div className="justify-around z-10 ">
          <div className=" xl:w-96 xl:h-16 leading-6 lg:w-80 lg:h-18 lg:top-32 absolute lg:left-[700px] xl:left-[800px] md:text-md md:left-[600px] md:top-40 md:w-72 sm:top-56 sm:text-sm sm:w-64 sm:left-[400px] lg:text-[15px]">
            WATG puts continued engagement and cutting-edge content creation at
            the heart of product delivery across multiple verticals, targeting
            emerging territories. We create new opportunities for partners to
            engage consumers and drive revenue growth through continued
            commitment within these markets.
          </div>
          <div className="font-bold text-sky-900 xl:text-5xl lg:text-4xl lg:top-[500px] absolute lg:left-[700px] xl:left-[800px] md:top-[500px] md:left-[600px] md:text-3xl sm:top-[500px] sm:left-[400px] sm:text-xl">
            Group Values
          </div>
        </div>
      </div>
    </>
  );
}
