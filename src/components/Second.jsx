export function Second() {
  return (
    <>
      <div className="w-screen sm:min-h-[500px]  bg-slate-900 flex justify-center items-center lg:min-h-screen xsm:min-h-[300px]">
        <div className="sm:w-[700px] sm:h-[400px] bg-white rounded-xl relative flex lg:h-[600px] lg:w-[1200px] xsm:w-[400px] xsm:h-[200px]">
          <video
            src="/videos/WhatWe.mp4"
            autoPlay
            muted
            loop
            className="rounded-xl absolute z-10 w-auto min-w-full h-auto min-h-full"
          />
          <div className="relative z-30 w-full">
            <div>
              <div className="font-bold text-sky-900 xl:text-5xl text-start lg:text-4xl absolute lg:top-32 lg:left-32 md:text-3xl md:top-40 md:left-28 sm:left-24 sm:top-14 sm:text-xl xsm:left-[10px] xsm:top-[15px]">
                What we do
              </div>
              <div className="xl:w-96 xl:h-16 xl:leading-6 lg:w-80 lg:h-18 lg:top-[500px] absolute lg:left-32 md:top-[400px] md:left-28 md:w-72 md:text-md sm:left-24 sm:w-64 sm:text-sm sm:top-[220px] text-justify lg:text-[15px] xsm:text-[9px] xsm:w-[180px] xsm:left-[10px] xsm:top-[120px]">
                WeAreTechnology Group is a market leader in the design and
                development of innovative mass market technology solutions.
                Through continued distribution, we deliver higher lifetime value
                and recurring revenue for our B2B and B2B2C partners.
              </div>
            </div>
            <div>
              <div className=" xl:w-96 xl:h-16 xl:leading-6 lg:w-80 lg:h-18 lg:top-32 absolute lg:left-[700px] xl:left-[750px] md:text-md md:left-[600px] md:top-40 md:w-72 sm:top-14 sm:text-sm sm:w-64 sm:left-[400px] lg:text-[15px] xsm:text-[9px] xsm:w-[180px] xsm:left-[200px] text-justify xsm:top-[15px]">
                WATG puts continued engagement and cutting-edge content creation
                at the heart of product delivery across multiple verticals,
                targeting emerging territories. We create new opportunities for
                partners to engage consumers and drive revenue growth through
                continued commitment within these markets.
              </div>
              <div className="font-bold text-sky-900 xl:text-5xl lg:text-4xl lg:top-[500px] absolute lg:left-[700px] xl:left-[750px] md:top-[500px] md:left-[600px] md:text-3xl sm:top-[300px] sm:left-[400px] sm:text-xl xsm:left-[280px] xsm:top-[160px]">
                Group Values
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* <div className="justify-around z-10">
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
        </div> */

/*<div className="w-screen lg:min-h-screen  bg-slate-900 flex justify-center items-center border md:h-max">
        <div className="w-[1200px] lg:h-[600px] bg-white rounded-xl relative flex">
          <div className="relative z-30 w-full">
            <div>
              <div className="font-bold text-sky-900 xl:text-5xl text-start lg:text-4xl absolute lg:top-32 lg:left-32 md:text-3xl md:top-40 md:left-28 sm:left-24 sm:top-56 sm:text-xl">
                What we do
              </div>
              <div className="xl:w-96 xl:h-16 xl:leading-6 lg:w-80 lg:h-18 lg:top-[500px] absolute lg:left-32 md:top-[400px] md:left-28 md:w-72 md:text-md sm:left-24 sm:w-64 sm:text-sm sm:top-[400px] text-justify lg:text-[15px]">
                WeAreTechnology Group is a market leader in the design and
                development of innovative mass market technology solutions.
                Through continued distribution, we deliver higher lifetime value
                and recurring revenue for our B2B and B2B2C partners.
              </div>
            </div>
            <div>
              <div className=" xl:w-96 xl:h-16 leading-6 lg:w-80 lg:h-18 lg:top-32 absolute lg:left-[700px] xl:left-[750px] md:text-md md:left-[600px] md:top-40 md:w-72 sm:top-56 sm:text-sm sm:w-64 sm:left-[400px] lg:text-[15px]">
                WATG puts continued engagement and cutting-edge content creation
                at the heart of product delivery across multiple verticals,
                targeting emerging territories. We create new opportunities for
                partners to engage consumers and drive revenue growth through
                continued commitment within these markets.
              </div>
              <div className="font-bold text-sky-900 xl:text-5xl lg:text-4xl lg:top-[500px] absolute lg:left-[700px] xl:left-[750px] md:top-[500px] md:left-[600px] md:text-3xl sm:top-[500px] sm:left-[400px] sm:text-xl">
                Group Values
              </div>
            </div>
          </div>
          <video
            src="/videos/WhatWe.mp4"
            autoPlay
            muted
            loop
            className="rounded-xl absolute w-auto min-w-full z-10"
          />
        </div>
      </div>*/
