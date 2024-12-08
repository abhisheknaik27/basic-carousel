import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };
  const handleReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 40) {
      return "red";
    } else if (progress < 70) {
      return "orange";
    } else {
      return "green";
    }
  };
  return (
    <div className="flex align-middle justify-center">
      <div className="items-center w-[200px] mt-[200px]">
        <div className="w-[100%] h-[30px] border-0 rounded-lg bg-gray-100 mb-[10px]">
          <div
            className="h-[100%] border rounded-lg transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, backgroundColor: getColor() }}
          ></div>
        </div>
        <div className="mt-[10px] text-2xl font-bold text-gray-700">
          {progress}%
        </div>

        <button
          onClick={handleProgress}
          className="bg-blue-300 border rounded-md box-border cursor-pointer text-md h-[40px] text-center px-3 mr-1 mt-3"
        >
          Progress
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-300 border rounded-md box-border cursor-pointer text-md h-[40px] text-center px-3 ml-1 mt-3"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
