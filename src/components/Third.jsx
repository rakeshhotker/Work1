import { useCallback, useEffect, useState } from "react";

export function Third() {
  const [collection, _] = useState([
    "emphasis on frontier markets",
    "Scale of entertainment content we create",
    "ability to work with us in multiple commercial options",
    "universal tech,agile platforms and iGaming solutions with global distributions",
  ]);
  const [text, setText] = useState(collection[0]);
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * collection.length);
    setText(collection[index]);
  }, []);
  useEffect(() => {
    const interval = setInterval(shuffle, 3000);
    return () => clearInterval(interval);
  }, [shuffle]);
  return (
    <>
      <div className="bg-slate-900 text-white font-bold pt-10 text-center w-screen relative sm:h-[800px]">
        <div className="text-center font-bold text-3xl">
          What differentiates us
        </div>
        <div className="md:text-5xl h-[400px] mt-20 sm:text-3xl sm:mx-10 flex flex-col justify-center">
          <h1>{text}</h1>
        </div>
        <div className="text-center">
          <div className="text-2xl">
            Are you looking for global online entertainment
            <br /> options to expand your reach, engage your users, and
            <br /> increase your monetary value?
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-32 mt-10">
            Get in touch
          </button>
        </div>
      </div>
    </>
  );
}
