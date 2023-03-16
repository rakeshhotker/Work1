import Image from "next/image";
import Logo from "../assets/WAT.png";
export function Navbar() {
  return (
    <>
      <div className="flex justify-around bg-slate-900 w-screen h-14 items-center fixed">
        <div className="flex w-40">
          <div className="w-[40px] h-[40px] pt-1 mr-2">
            <Image src={Logo} width="37px" height="37px" alt="Logo" />
          </div>
          <div className="text-slate-100 font-bold">
            WeAre
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
