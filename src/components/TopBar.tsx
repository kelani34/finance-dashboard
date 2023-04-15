import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex gap-6">
      <input
        className="bg-[#272D35] px-8 py-7 rounded-2xl pl-[70px]"
        placeholder="Tap here to search"
        style={{
          backgroundImage: "url(/search.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "30px center",
        }}
      />
      <div className="flex gap-6">
        <div className="bg-[#272D35] px-8 py-7 pr-10 rounded-2xl relative cursor-pointer">
          <Image src={"/message.svg"} width={25} height={25} alt={"message"} />
          <div className="bg-[#6F4CA4] rounded-full absolute top-2 right-3 ">
            <p className="text-center my-2 mx-4">4</p>
          </div>
        </div>
        <div className="bg-[#272D35] px-8 py-7 pr-10 rounded-2xl relative cursor-pointer">
          <Image
            src={"/notification.svg"}
            width={25}
            height={25}
            alt={"message"}
          />
          <div className="bg-[#6F4CA4] rounded-full absolute top-2 right-3 ">
            <p className="text-center my-2 mx-4">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
