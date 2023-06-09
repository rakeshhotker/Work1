import { Griddiv } from ".";

export function Fourth() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-full pt-40 flex flex-col justify-around relative ">
        <div>
          <h1 className="text-white font-bold left-[162px] top-[100px] text-6xl absolute sm:text-4xl sm:left-[100px] xsm:text-3xl xsm:left-[50px]">
            Our brands
          </h1>
        </div>
        <div className="text-white font-light  sm:text-xl absolute left-[162px] top-[200px] sm:left-[100px] sm:w-[600px] md:w-[800px] lg:min-w-max xsm:text-sm xsm:left-[50px]">
          Our technology platforms can service multiple client/partner types in
          different formats and territories worldwide.
        </div>
        <Griddiv />
      </div>
    </>
  );
}
