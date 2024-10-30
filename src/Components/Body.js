import React from "react";
import Sidebar from "./Sidebar.js";
import MainContainer from "./MainContainer.js";
import UserMenu from "./UserMenu.js";
const Body = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <MainContainer />
      </div>
      <div className="absolute right-10 z-50 bg-slate-50">
        <UserMenu />
      </div>
    </div>
  );
};

export default Body;
