import Image from "next/image";
export function Navbar() {
  return (
    <>
      <div className="flex justify-around bg-slate-900 w-screen h-14 items-center fixed">
        <div className="flex items-center">
          <Image src="/assets/WAT.png" width={36.1} height={35.64} />
          <div className="text-slate-100 font-bold">
            We Are
            <br />
            Technology
          </div>
        </div>
        <div className="flex justify-around w-96 text-slate-100 font-light">
          <div>Brands</div>
          <div>Why Us</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
}
