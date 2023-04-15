import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}
const FeatBox = ({ src }: Props) => {
  return (
    <div className="bg-[#6F4CA4] px-8 py-7 rounded-2xl relative cursor-pointer flex items-center justify-center">
      <Image src={src} width={25} height={25} alt={"message"} />
    </div>
  );
};

export default FeatBox;
