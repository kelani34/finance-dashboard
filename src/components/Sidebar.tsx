import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#272D35] py-10 rounded-2xl">
      <ul>
        <li className=" my-6 flex">
          <div className=" rounded-r-3xl w-2 h-8 bg-gradient-radial" />
          <div className="flex items-center w-full gap-6 px-7 ">
            <Image src={"/Home.svg"} width={15} height={15} alt="dashboard" />
            <p className="text-white font-bold text-2xl">Dashboard</p>
          </div>
        </li>
        <li className=" flex my-6">
          <div className=" rounded-r-3xl w-2 h-8 bg-gradient-radial" />
          <div className="flex items-center w-full gap-6 px-7">
            <Image
              src={"/Document.svg"}
              width={15}
              height={15}
              alt="documents"
            />
            <p className="text-[#C4C4C4] font-bold text-2xl text-left">
              Documents
            </p>
          </div>
        </li>
        <li className=" flex my-6">
          <div className=" rounded-r-3xl w-2 h-8 bg-gradient-radial" />
          <div className="flex items-center w-full gap-6 px-7">
            <Image src={"/Payment.svg"} width={15} height={15} alt="payments" />
            <span className="text-[#C4C4C4] font-bold text-2xl">Payments</span>
          </div>
        </li>
        <li className=" flex my-6">
          <div className=" rounded-r-3xl w-2 h-8 bg-gradient-radial" />
          <div className="flex items-center w-full gap-6 px-7">
            <Image
              src={"/Calendar.svg"}
              width={15}
              height={15}
              alt="calender"
            />
            <span className="text-[#C4C4C4] font-bold text-2xl">Calendar</span>
          </div>
        </li>
        <li className=" flex my-6">
          <div className=" rounded-r-3xl w-2 h-8 bg-gradient-radial" />
          <div className="flex items-center w-full gap-6 px-7">
            <Image src={"/Profile.svg"} width={15} height={15} alt="profile" />
            <span className="text-[#C4C4C4] font-bold text-2xl">Profile</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
