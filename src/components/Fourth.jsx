import { Griddiv } from ".";

export function Fourth() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-full pt-40 flex flex-col justify-around">
        <div>
          <h1 className="text-white font-bold ml-32 text-6xl">Our brands</h1>
        </div>
        <div className="text-white font-light ml-32 text-xl pt-20">
          Our technology platforms can service multiple client/partner types in
          different formats and territories worldwide.
        </div>
        <Griddiv />
      </div>
    </>
  );
}
