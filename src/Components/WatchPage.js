import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [vidId] = useSearchParams();
  console.log(vidId.get("v"));
  useEffect(() => {
    closeSidebarHandler();
  }, [closeSidebarHandler]);

  function closeSidebarHandler() {
    console.log("closeSidebarHandler called");
    dispatch(closeSidebar());
  }
  return (
    <div>
      <iframe
        width="1100"
        height="600"
        className="m-4 p-4 "
        src={"https://www.youtube.com/embed/" + vidId.get("v")}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
