import React from "react";
import Sidebar from "./Sidebar.js";
import UserMenu from "./UserMenu.js";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <Outlet></Outlet>
      <div className="absolute right-10 z-50 bg-slate-50">
        <UserMenu />
      </div>
    </div>
  );
};

export default Body;
