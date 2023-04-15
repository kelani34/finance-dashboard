import React from "react";
import Sidebar from "./Sidebar";
import Procard from "./Procard";
import Mid from "./Mid";
import ProfileBar from "./ProfileBar";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "/Dashboard.svg",
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "/Document.svg",
  },
  {
    path: "/payments",
    name: "Payments",
    icon: "/Payment.svg",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "/Calendar.svg",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "/Profile.svg",
  },
];
const Main = () => {
  return (
    <div className=" p-8 flex gap-6">
      <div className="flex flex-col  gap-6">
        <Sidebar routes={routes} />
        <Procard />
      </div>
      <div className="flex-1">
        <Mid />
      </div>
      <div>
        <ProfileBar />
      </div>
    </div>
  );
};

export default Main;
