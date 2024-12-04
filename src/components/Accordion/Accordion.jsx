import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div>dx{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>

      {isActive && <div>{content}</div>}
    </div>
  );
};

export default Accordion;
