import React from "react";
import FeatBox from "./FeatBox";
import UserImage from "./UserImage";

const Users = () => {
  return (
    <div className="flex items-center gap-6">
      <UserImage img={"/user.png"} height={55} width={55} />
      <div>
        <h2 className="text-white font-semibold text-sm ">Jonie Juger</h2>
        <p className="text-white opacity-50 text-xs ">Project Manager</p>
      </div>
    </div>
  );
};

export default Users;
