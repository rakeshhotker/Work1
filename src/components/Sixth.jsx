import Logo from "../assets/WAT.png";
import Image from "next/image";
export function Sixth() {
  return (
    <>
      <div className="w-screen h-full bg-slate-900 flex flex-col items-center pt-40 ">
        <h1 className="text-white text-center text-4xl">Want to know more?</h1>
        <div className="pt-20 md:w-[800px] h-[655px] flex flex-col border border-white rounded-xl mt-10 hover:drop-shadow-2xl bg-slate-800">
          <div className="text-center text-white text-3xl">
            Schedule a call with us
          </div>
          <div className="pt-10">
            <form className="mx-8 space-y-8 flex flex-col items-center">
              <div className="h-10">
                <input
                  className="w-[400px] border-b-2 border-white outline-none text-white bg-slate-800"
                  placeholder="Name*"
                />
              </div>
              <div className="h-10">
                <input
                  className="w-[400px] border-b-2 border-white outline-none text-white bg-slate-800"
                  placeholder="Email*"
                />
              </div>
              <div className="h-10">
                <input
                  className="w-[400px] border-b-2 border-white outline-none text-white bg-slate-800"
                  placeholder="Subject*"
                />
              </div>
              <div className="h-10">
                <input
                  className="w-[400px] border-b-2 border-white outline-none text-white bg-slate-800"
                  placeholder="Message*"
                />
              </div>
            </form>
            <div className="text-center">
              <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full w-40 mt-10">
                Submit form
              </button>
              <h2 className="pt-5 text-white">
                or email us at hello@weare.game
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 w-full pt-5 bg-gradient-footer ">
          <div className="flex text-white items-center justify-around w-72">
            <div>POWERED BY</div>
            <div className="w-[40px] h-[40px] ">
              <Image src={Logo} width="37px" height="37px" alt="Logo" />
            </div>
            <div className="text-2xl font-bold">
              We Are
              <br />
              Technology
            </div>
          </div>
          <div className="flex flex-col items-center text-white pt-10">
            <div>WATECHNOLOGY.COM</div>
            <div>
              &copy;&nbsp;Copyright WeAreTechnology Group. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
