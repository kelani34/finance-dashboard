import Image from "next/image";
import React from "react";

const Procard = () => {
  return (
    <div className="bg-[#272D35] p-4 rounded-2xl w-max flex flex-col justify-center items-center cursor-pointer">
      <Image
        src={"/pro.png"}
        height={50}
        width={50}
        alt="upgrade to pro"
        className=" mb-5"
      />
      <h3 className="text-center my-2 text-sm font-bold">Upgrade to Pro</h3>
      <p className="max-w-[140px] text-center opacity-50 mb-8 text-[10px]">
        Check your magic on this Pro Dashboard
      </p>
    </div>
  );
};

export default Procard;
