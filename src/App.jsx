import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";
import MultipleAcc from "./components/Accordion/MultipleAcc";
import Pagination from "./components/Pagination/Pagination";
import AutoProgress from "./components/ProgressBar/AutoProgress";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const App = () => {
  const [toggle, setToggle] = useState(true);
  // const images = [img1, img2, img3, img4, img5, img6];
  // return <Carousel images={images} />;
  //return <MultipleAcc />;
  // return <Pagination />;
  // return <ProgressBar />;

  return (
    <div className="flex h-screen justify-center items-center">
      {toggle ? (
        <button
          className="border bg-green-500 px-4 py-3 rounded-md text-xl font-semibold uppercase"
          onClick={() => setToggle(!toggle)}
        >
          Start
        </button>
      ) : (
        <AutoProgress />
      )}
    </div>
  );
};

export default App;
