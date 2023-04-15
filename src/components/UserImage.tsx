import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  online?: boolean;
  height: number;
  width: number;
}

const UserImage = ({ img, online, height, width }: Props) => {
  return (
    <div className="p-1 border border-[#B983FF] rounded-full relative">
      <Image src={img} alt="user" width={width} height={height} />
      {online && (
        <div className="p-2 bg-[#04C000] rounded-full absolute right-3 bottom-3" />
      )}
    </div>
  );
};

export default UserImage;
