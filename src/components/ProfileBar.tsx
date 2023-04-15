import Image from "next/image";
import React from "react";
import FeatBox from "./FeatBox";
import Users from "./Users";
import UserImage from "./UserImage";

const ProfileBar = () => {
  return (
    <div className="bg-[#272D35] rounded-2xl p-8 flex flex-col items-center">
      <div className="flex justify-center my-1">
        <UserImage img={"/user.png"} online={true} height={80} width={80} />
      </div>
      <div className="flex flex-col my-1 mb-6 ">
        <h3 className="text-white text-center mb-1">Emmy Dansom</h3>
        <p className="text-white opacity-50 text-center">CEO</p>
      </div>
      <div className="flex gap-5">
        <FeatBox src={"/notification.svg"} />
        <FeatBox src={"/message.svg"} />
        <FeatBox src={"/settings.svg"} />
      </div>

      <div className="border border-[#C4C4C4] opacity-50 my-10 w-full" />
      <div className="w-full">
        <h1 className="text-white font-semibold text-sm">About</h1>
        <p className="max-w-[260px] text-white opacity-50 text-xs my-2">
          Organized activities to make money and sell goods and services for a
          profit
        </p>
      </div>
      <div className="w-full flex gap-6 flex-col">
        <Users />
        <Users />
        <Users />
      </div>
    </div>
  );
};

export default ProfileBar;
