import React from "react";
import { useDispatch } from "react-redux";
import { toggleUserMenu, toggleSidebar } from "../Utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  // this will dispatch an action
  function toggleSidebarHandler() {
    console.log(
      "Hamburger clicked, now action will be dispached to hide the sidebar"
    );
    dispatch(toggleSidebar());
  }

  // this will dispatch an action
  function displayUserMenuHandler() {
    console.log(
      "User icon clicked, action will be dispatched to toggle user menu"
    );
    dispatch(toggleUserMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex px-2 col-span-1 ">
        <img
          alt="Hamburger"
          src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
          className="h-10 cursor-pointer"
          onClick={() => {
            toggleSidebarHandler();
          }}
        />

        <img
          alt="youtube Icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7GwM7oE-rQcV4an0eDYMMKDHc7wdMx6tKw&s"
          className="h-10 ml-2"
        />
      </div>
      <div className="flex col-span-10  ">
        <input
          type="text"
          className="border border-gray-200 rounded-l-2xl w-3/4 ml-10 p-2 "
        />
        <button className="p-2 bg-gray-200 border border-gray-200  rounded-r-2xl">
          <img
            alt="search"
            src="https://www.svgrepo.com/show/7109/search.svg"
            className="h-6"
          />
        </button>
      </div>
      <div className="col">
        <img
          alt="user"
          src="https://www.svgrepo.com/show/535711/user.svg"
          className="h-8 cursor-pointer"
          onClick={() => {
            displayUserMenuHandler();
          }}
        />
      </div>
    </div>
  );
};

export default Head;
