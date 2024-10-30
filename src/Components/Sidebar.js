import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarEnabled = useSelector(function (store) {
    return store.app.isSidebarEnabled;
  });

  if (!isSidebarEnabled) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ol className="font-bold">
        <li>
          <div className="flex mt-2">
            <div>
              <img
                alt="home"
                src="https://www.svgrepo.com/show/535437/home.svg"
                className="h-6 mr-4 "
              />
            </div>
            <div>Home</div>
          </div>
        </li>
        <div className="flex mt-2">
          <img
            src="https://www.svgrepo.com/show/506687/youtube-play.svg"
            alt="shorts logo"
            className="h-8 mr-4 mt-2"
          />
          <li className="h-8 mr-4 mt-3">Shorts</li>
        </div>

        <div className="flex mt-2">
          <img
            alt="subscribe"
            src="https://www.svgrepo.com/show/144234/bell-icon-silhouette.svg"
            className="h-6 mr-4 mt-3"
          />
          <li className="mt-3">Subscriptions</li>
        </div>
      </ol>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ol>
        <li>Cricbuzz</li>
        <li>BCCI</li>
        <li>Dhruv Rathee</li>
        <li>Codevolution</li>
      </ol>

      <h1 className="font-bold pt-5">Explore</h1>
      <ol>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
      </ol>
    </div>
  );
};

export default Sidebar;
