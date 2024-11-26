import React, { useEffect, useState } from "react";
const Clock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      let currentTime = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      currentTime = currentTime.replace("am", "AM").replace("pm", "PM");

      setTime(currentTime);
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <div className="flex h-screen w-full justify-center items-center bg-gray-800">
      <div className=" bg-gray-700 p-10 border-none rounded-lg shadow-md text-white text-5xl ">
        {time}
      </div>
    </div>
  );
};

export default Clock;
