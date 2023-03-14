import Image from "next/image";
import { Second } from ".";
export function First() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-max flex flex-col">
        <div className="text-neutral-400 text-9xl font-bold ml-80 mt-20">
          WeAre
          <br />
          Technology
          <br />
          Group
        </div>
        <div className="flex">
          <video
            autoPlay
            loop
            style={{ width: "500px", height: "500px" }}
            className="top-3/4 left-36"
          >
            <source src="/assets/Sound.mp4" />
          </video>
          <div>
            <div className="w-96 h-8 text-white ml-80">
              WeAreTechnology Group is a leading provider of premium iGaming
              products, platforms and management solutions. We offer a complete
              portfolio of universal technology solutions that create seamless
              experiences for our B2B and B2B2C partners worldwide.
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-80 mt-32 w-32">
              Get in touch
            </button>
          </div>
        </div>
        <Second/>
      </div>
    </>
  );
}
