import React, { useState } from "react";

export const Accordion = () => {
  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
  };
  const { title, content } = accordionData;
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "+" : "-"}</div>
      </div>

      {isActive && { content }}
    </div>
  );
};

export default Accordion;
