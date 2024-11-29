import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starCount }) => {
  const [clicked, setClicked] = useState();
  const [hover, setHover] = useState();
  const [hover2, setHover2] = useState();
  return (
    <div className="flex flex-col gap-10 h-screen w-full justify-center items-center">
      <div className="text-5xl ">
        {new Array(starCount).fill(0).map((value, index) => (
          <span
            key={index}
            onClick={() => setClicked(index + 1)}
            className={
              (hover === 0 && index < clicked) || index < hover
                ? "text-orange-500"
                : ""
            }
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        ))}
      </div>

      <div className="flex text-4xl ">
        {new Array(starCount).fill(0).map((val, index) => (
          <span
            key={index}
            onClick={() => setClicked(index + 1)}
            onMouseEnter={() => setHover2(index + 1)}
            onMouseLeave={() => setHover2(0)}
            className={
              (hover2 === 0 && index < clicked) || index < hover2
                ? "text-yellow-500"
                : ""
            }
          >
            <FaStar />
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
