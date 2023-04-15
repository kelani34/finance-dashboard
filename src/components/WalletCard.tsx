import React from "react";

const WalletCard = () => {
  return (
    <div className="bg-[#272D35] rounded-2xl p-8 h-full flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="text-white font-semibold text-sm">Send Money</h3>
          <div className="flex justify-between my-4">
            <div className="p-2 rounded-full bg-[#FF98BF]" />
            <p className="text-white text-xs font-medium ">Your Card</p>
          </div>
        </div>
        <h2 className="text-white font-semibold text-2xl  ">$145,000</h2>
      </div>
    </div>
  );
};

export default WalletCard;
