import React from "react";
import Sidebar from "./Sidebar";
import Procard from "./Procard";
import Mid from "./Mid";

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
    <div className=" p-8 flex">
      <div>
        <Sidebar routes={routes} />
        <Procard />
      </div>
      <div>
        <Mid />
      </div>
    </div>
  );
};

export default Main;
