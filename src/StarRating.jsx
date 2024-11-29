import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
{
  /* <CiStar /> */
}

const StarRating = ({ starCount }) => {
  const [clicked, setClicked] = useState();
  const [hover, setHover] = useState();

  return (
    <div className="flex h-screen w-full justify-center items-center text-5xl ">
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
  );
};

export default StarRating;
