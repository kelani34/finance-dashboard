import React, { useState } from "react";

interface Props {
  percentage: number;
}
const ProgressBar = ({ percentage }: Props) => {
  const [circumference] = useState(50 * 2 * Math.PI);
  const [percent] = useState(percentage);

  return (
    <span className="flex items-center justify-center overflow-hidden">
      <svg
        className="w-32 h-32 transform translate-x-1 translate-y-1"
        aria-hidden="true"
      >
        <circle
          className="text-[#ffffff]"
          strokeWidth="15"
          stroke="#ECECEC"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-[#A645B6]"
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={((percent - 100) / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          style={{ filter: "none" }}
        />
      </svg>
      <span className="absolute text-xl font-bold text-white">
        {" "}
        + {`${percent}%`}
      </span>
    </span>
  );
};

export default ProgressBar;
