import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused == false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const ActiveButtons = (
    <div className="font-semibold">
      <button
        className="bg-sky-300 px-2 py-2 border rounded-md m-2"
        onClick={() => {
          setIsActive(false);
          setTime(0);
        }}
      >
        Reset
      </button>
      <button
        className="bg-sky-300 px-2 py-2 border rounded-md m-2"
        onClick={() => setIsPaused(!isPaused)}
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  const StartButton = (
    <div>
      <button
        className="bg-sky-300 px-2 py-2 border rounded-md m-2 font-semibold"
        onClick={() => {
          setIsActive(true);
          setIsPaused(false);
        }}
      >
        Start
      </button>
    </div>
  );

  return (
    <div className="flex flex-col h-screen w-full justify-center align-middle items-center bg-slate-700 text-xl">
      <div className="bg-gray-400 w-64 h-64 flex flex-col justify-center items-center border rounded-lg">
        <div className="m-2 text-3xl font-bold">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div>
          <div>{isActive ? ActiveButtons : StartButton}</div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
