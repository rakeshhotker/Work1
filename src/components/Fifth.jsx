export function Fifth() {
  return (
    <>
      <div className="w-screen h-full bg-slate-900 text-white pl-32">
        <div className="text-4xl ">Why these verticals?</div>
        <div className="grid grid-row-2 grid-cols-2 pt-20 pl-40 gap-y-10">
          <div className="flex flex-col w-[369px] h-[369px] border rounded-xl justify-around bg-gradient-vertical1-1  shadow-shadow-custom">
            <div></div>
            <div className="w-[238px] pl-10 h-[105px] text-xl">
              Dextrous content is applicable in almost any market across the
              globe.
            </div>
          </div>
          <div className="flex flex-col w-[369px] h-[369px] border rounded-xl justify-around -ml-52 bg-gradient-vertical2-1 ">
            <div></div>
            <div className="w-[238px] pl-10 h-[105px] text-xl">
              Rapid scale in audience and geography.
            </div>
          </div>
          <div className="flex flex-col w-[369px] h-[369px] border rounded-xl justify-around bg-gradient-vertical3-1 ">
            <div></div>
            <div className="w-[238px] pl-10 h-[105px] text-xl">
              Products are aligned to the audience's behaviour patterns.
            </div>
          </div>
          <div className="flex flex-col w-[369px] h-[369px] border rounded-xl justify-around -ml-52 bg-gradient-vertical4-1  shadow-shade-vertical4">
            <div></div>
            <div className="w-[240px] pl-10 h-[200px] text-xl">
              Audience compatibility across multiple products and platforms
              provides ample cross-sell opportunities and revenue maximisation.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
