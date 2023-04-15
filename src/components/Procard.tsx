import Image from "next/image";
import React from "react";

const Procard = () => {
  return (
    <div className="bg-[#272D35] p-10 rounded-2xl">
      <Image src={"/pro.png"} height={50} width={50} alt="upgrade to pro" />
    </div>
  );
};

export default Procard;
