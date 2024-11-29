import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleUserMenu, toggleSidebar } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";

const Head = () => {
  const [userStatus, setUserStatus] = useState(false);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  const getSearchSuggestions = async () => {
    console.log("API CALLED - ", search);
    const resp = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await resp.json();
    setSearchData(json[1]);
    console.log(json[1]);
  };
  // this will dispatch an action
  function toggleSidebarHandler() {
    console.log(
      "Hamburger clicked, now action will be dispached to Toggle the sidebar"
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

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {}

  function toggleBtn() {
    setUserStatus(!userStatus);
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex px-3 col-span-1 ">
        <img
          alt="Hamburger"
          src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
          className="h-10 cursor-pointer pr-8"
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
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        <button
          className="p-2 bg-gray-200 border border-gray-200  rounded-r-2xl "
          onClick={() => {
            handleSearch();
          }}
        >
          <img
            alt="search"
            src="https://www.svgrepo.com/show/7109/search.svg"
            className="h-6"
          />
        </button>
        {showSuggestions && (
          <div className="absolute top-20 left-80 bg-white py-4 px-5 w-[47rem] ">
            <>
              <ul>
                {searchData.map((entry) => {
                  return <li>{entry}</li>;
                })}
              </ul>
            </>
          </div>
        )}
      </div>

      <div>
        <button
          className="bg-slate-200 "
          onClick={() => {
            toggleBtn();
          }}
        >
          {userStatus ? "Login" : "Logout"}
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
