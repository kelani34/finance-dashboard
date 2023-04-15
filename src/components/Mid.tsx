import React from "react";
import TopBar from "./TopBar";
import TotalCards from "./TotalCards";

const Mid = () => {
  return (
    <div className="flex flex-col gap-6">
      <TopBar />
      <div className="flex gap-6">
        <TotalCards />
        <TotalCards />
      </div>
    </div>
  );
};

export default Mid;
