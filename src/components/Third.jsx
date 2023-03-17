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
      <div className="bg-slate-900 text-white font-bold pt-20 text-center w-screen h-100 sm:w-[1400px]">
        <div className="text-center font-bold text-3xl">
          What differentiates us
        </div>
        <div className="pt-40 text-5xl h-[600px] ml-52 max-w-5xl">
          <h1>{text}</h1>
        </div>
        <div className="pt-40 text-center">
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
