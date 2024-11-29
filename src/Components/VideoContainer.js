import React, { useState } from "react";
import { useEffect } from "react";
import VideoCard, { AdvCard } from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../Utils/Constants";
import { Link } from "react-router-dom";
import Shimmer from "../Utils/Shimmer";

const VideoContainer = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const[searchList,setSearchList]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setData(json?.items);
      setSearchData(json?.items);
    } catch (err) {
      console?.error(err);
    }
  }

  // console.log(data);

  function filterList() {
    const filteredList = data.filter(
      (video) => video?.statistics?.likeCount > 100000
    );
    setSearchData(filteredList);
  }

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function handleSubmit() {
    const searchList = data.filter((element) =>
      element?.snippet?.localized?.title
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setSearchData(searchList);
  }

  if (data.length === 0) {
    return (
      <>
        <Shimmer />
      </>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          filterList();
        }}
        className="m-2 p-2 border border-black hover:bg-blue-700"
      >
        Top Videos
      </button>
      <input
        type="text"
        value={searchText}
        onChange={(e) => handleChange(e)}
        className="p-2 m-2 border border-black cursor-auto"
      ></input>
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="border border-black p-2 m-2 rounded-md hover:bg-green-400"
      >
        Search
      </button>
      <div className="p-2 m-2 flex flex-wrap justify-items-stretch">
        {searchData.map((data) => {
          return (
            <>
              {data[0] && <AdvCard data={data[0]} />}
              <Link key={data?.id} to={"watch?v=" + data.id}>
                <VideoCard data={data} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
