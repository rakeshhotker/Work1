import { Griddiv } from ".";

export function Fourth() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-full pt-40 flex flex-col justify-around relative sm:w-[1400px]">
        <div>
          <h1 className="text-white font-bold left-[162px] top-[100px] text-6xl absolute">
            Our brands
          </h1>
        </div>
        <div className="text-white font-light  text-xl absolute left-[162px] top-[200px]">
          Our technology platforms can service multiple client/partner types in
          different formats and territories worldwide.
        </div>
        <Griddiv />
      </div>
    </>
  );
}
