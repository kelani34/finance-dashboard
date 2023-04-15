import Image from "next/image";
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  routes: { path: string; name: string; icon: string }[];
}

const Sidebar = ({ routes }: Props) => {
  const { pathname } = useRouter();

  return (
    <div className="bg-[#272D35] py-10 rounded-2xl w-max">
      <div>
        {routes.map((route) => (
          <Link className=" my-6 flex" key={route.path} href={route.path}>
            <div
              className={` rounded-r-3xl w-2 h-8 bg-gradient-radial ${
                route.path === pathname ? "bg-gradient-radial" : "bg-none"
              }`}
            />
            <div className="flex items-center w-full gap-6 px-7 ">
              <Image src={route.icon} width={15} height={15} alt={route.name} />
              <p
                className={`${
                  route.path === pathname ? "text-white" : "text-[#C4C4C4]"
                } font-medium text-2xl`}
              >
                {route.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
