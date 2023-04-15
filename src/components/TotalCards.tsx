import React from "react";
import ProgressBar from "./Progressbar";

const TotalCards = () => {
  return (
    <div className="rounded-2xl bg-gradient-card1 p-8 shadow-[4px_24px_45px_rgba(111,76,164,0.16)] flex items-center gap-10 justify-center flex-1">
      <div>
        <h2 className="text-white text-sm mb-2 font-semibold">Total Finance</h2>
        <span className="text-white text-3xl font-semibold">9,900k</span>
      </div>
      <ProgressBar percentage={70} />
    </div>
  );
};

export default TotalCards;
