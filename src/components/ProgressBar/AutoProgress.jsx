import React, { useEffect, useState } from "react";
import "./AutoProgress.css";

const AutoProgress = () => {
  const [toggle, setToggle] = useState(true);
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval running");
      setBar((prevBarValue) => {
        if (prevBarValue >= 100) {
          clearInterval(interval);
          return prevBarValue;
        }

        return prevBarValue + 5;
      });
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div
          className="progress"
          style={{ transform: ` translateX(${bar - 100}%)` }}
        ></div>
      </div>
    </>
  );
};

export default AutoProgress;
