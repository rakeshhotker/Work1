import Horse from "../../public/horse.svg";
import LineChart from "../../public/line-chart.svg";
import Arrows from "../../public/bidirectional-arrow.svg";
import Earth from "../../public/earth.svg";
export function Fifth() {
  return (
    <>
      <div className="w-screen sm:h-[800px] bg-slate-900 text-white relative xsm:h-[1200px]">
        <div className="text-4xl absolute lg:left-[162px] sm:left-[100px] sm:top-2 xsm:top-6 xsm:left-[50px]">
          Why these verticals?
        </div>
        <div className="absolute lg:w-[369px] lg:h-[369px] lg:left-[327px] lg:top-[100px] bg-gradient-vertical1-1 hover:opacity-50 rounded-xl sm:w-[300px] sm:h-[300px] sm:top-[100px] sm:left-[100px] xsm:top-[100px] xsm:left-[100px] xsm:w-[250px] xsm:h-[250px]">
          <div className="absolute sm:left-[33px] top-1/4 bottom-3/4 right-3/4 w-[48.55px] h-[48.55px] xsm:left-[20px]">
            <Earth className="fill-white" />
          </div>
          <div className="absolute lg:w-[238px] lg:h-[105px] lg:left-[53px] lg:top-[190px] sm:top-[170px] sm:left-[33px] xsm:top-[150px] xsm:left-[20px] xsm:pr-2">
            Dextrous content is applicable in almost any market across the
            globe.
          </div>
        </div>
        <div className="absolute lg:w-[369px] lg:h-[369px] lg:left-[744px] lg:top-[100px] bg-gradient-vertical2-1 hover:opacity-50 rounded-xl sm:w-[300px] sm:h-[300px] sm:top-[100px] sm:left-[420px] xsm:top-[400px] xsm:left-[100px] xsm:w-[250px] xsm:h-[250px]">
          <div className="absolute sm:left-[33px] top-1/4 bottom-3/4 right-3/4 w-[48.55px] h-[48.55px] xsm:left-[20px]">
            <Horse className="fill-white" />
          </div>
          <div className="absolute lg:w-[238px] lg:h-[105px] lg:left-[53px] lg:top-[190px] sm:top-[170px] sm:left-[33px] xsm:top-[150px] xsm:left-[20px]">
            Rapid scale in audience and geography.
          </div>
        </div>
        <div className="absolute lg:w-[369px] lg:h-[369px] lg:left-[327px] lg:top-[500px] bg-gradient-vertical3-1 hover:opacity-50 rounded-xl sm:w-[300px] sm:h-[300px] sm:top-[430px] sm:left-[100px] xsm:top-[700px] xsm:left-[100px] xsm:w-[250px] xsm:h-[250px]">
          <div className="absolute sm:left-[33px] top-1/4 bottom-3/4 right-3/4 w-[48.55px] h-[48.55px] xsm:left-[20px]">
            <LineChart className="fill-white" />
          </div>
          <div className="absolute lg:w-[238px] lg:h-[105px] lg:left-[53px] lg:top-[190px] sm:top-[170px] sm:left-[33px] xsm:left-[20px] xsm:top-[150px]">
            Products are aligned to the audience's behaviour patterns.
          </div>
        </div>
        <div className="absolute lg:w-[369px] lg:h-[369px] lg:left-[744px] lg:top-[500px] bg-gradient-vertical4-1 hover:opacity-50 rounded-xl sm:w-[300px] sm:h-[300px] sm:top-[430px] sm:left-[420px] xsm:top-[1000px] xsm:left-[100px] xsm:w-[250px] xsm:h-[250px]">
          <div className="absolute sm:left-[33px] sm:top-1/4 bottom-3/4 right-3/4 w-[48.55px] h-[48.55px] xsm:top-[20px] xsm:left-[20px]">
            <Arrows className="fill-white" />
          </div>
          <div className="absolute lg:w-[238px] lg:h-[105px] lg:left-[53px] lg:top-[190px] sm:top-[150px] sm:left-[33px] xsm:left-[20px] xsm:top-[100px] xsm:pr-2">
            Audience compatibility across multiple products and platforms
            provides ample cross-sell opportunities and revenue maximisation.
          </div>
        </div>
      </div>
    </>
  );
}
