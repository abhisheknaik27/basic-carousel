import React from "react";
import Accordion from "./Accordion";

const MultipleAcc = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                  laborum cupiditate possimus labore, hic temporibus velit dicta earum
                  suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                  voluptatem.`,
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                  laborum cupiditate possimus labore, hic temporibus velit dicta earum
                  suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                  voluptatem.`,
    },
  ];
  return (
    <div>
      <h1>Accordion</h1>
      <div>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default MultipleAcc;
