import React from "react";
import Sidebar from "./Sidebar";

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
    <div className=" p-8">
      <Sidebar routes={routes} />
    </div>
  );
};

export default Main;
