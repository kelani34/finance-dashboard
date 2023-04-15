import Image from "next/image";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  routes: { path: string; name: string; icon: string }[];
}

const Sidebar = ({ routes }: Props) => {
  const { pathname } = useRouter();
  const [isLightMode, setIsLightMode] = useState(false);

  const handleToggle = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="bg-[#272D35] py-10 rounded-2xl w-max">
      <div className="flex flex-col">
        {routes.map((route) => (
          <Link
            className=" my-6 flex style-link  "
            key={route.path}
            href={route.path}
          >
            <div
              className={`style-bg-gradient rounded-r-3xl w-2 h-8 bg-gradient-radial  ${
                route.path === pathname ? "bg-gradient-radial" : "bg-none"
              }`}
            />
            <div
              className={` ${
                route.path === pathname
                  ? " opacity-100"
                  : " opacity-50 hover:opacity-100"
              } flex items-center w-full gap-6 px-7 `}
            >
              <Image src={route.icon} width={15} height={15} alt={route.name} />
              <p
                className={`${
                  route.path === pathname ? "text-white" : "text-[#C4C4C4]"
                } font-medium text-sm`}
              >
                {route.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className="border border-[#C4C4C4] opacity-50 m-10" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center w-full gap-6 my-6">
          <div
            className={`flex items-center w-full gap-6 px-7 ${
              isLightMode ? "opacity-100" : "opacity-50"
            }`}
            onClick={handleToggle}
          >
            <Image
              src={isLightMode ? "/toggle2.svg" : "/toggle1.svg"}
              className=""
              width={15}
              height={15}
              alt="profile"
            />
            <span
              className={`${
                isLightMode ? "text-white" : "text-[#C4C4C4]"
              } font-medium text-sm`}
            >
              {isLightMode ? "Light mode" : "Dark mode"}
            </span>
          </div>
        </div>

        <Link
          href={"/settings"}
          className=" flex items-center w-full gap-6 my-6"
        >
          <div className="flex items-center w-full gap-6 opacity-50 px-7">
            <Image
              src={"/settings.svg"}
              className=" "
              width={15}
              height={15}
              alt="profile"
            />
            <span className="text-[#C4C4C4] font-medium text-sm ">
              Settings
            </span>
          </div>
        </Link>
        <Link href={"/login"} className=" flex items-center w-full gap-6 my-6">
          <div className="flex items-center w-full gap-6  px-7">
            <Image
              src={"/logout.svg"}
              className=" "
              width={15}
              height={15}
              alt="profile"
            />
            <span className="text-[#CD5656] font-medium text-sm ">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
