import React from "react";
import "./portComp.css";
const PortComp = () => {
  return (
    <div id="things">
      <div className="thing" id="kmdcsc">
        <div className="thingName">
          {" "}
          <b> kmdcsc </b> <span id="kmdcscprogress">(0/100)</span>
        </div>

        <div className="progressBar">
          <div className="progressFilled" id="kmdcscbar"></div>
        </div>
        <button className="plus" aria-label="increment thing kmdcsc">
          {" "}
        </button>
      </div>
    </div>
  );
};

export default PortComp;
