const VideoCard = ({ data }) => {
  // console.log(data);
  const { snippet, statistics } = data;
  const { thumbnails, channelTitle, localized } = snippet;
  const imgpath = thumbnails?.medium?.url;
  const Title = localized?.title;
  let viewCount = statistics?.viewCount;

  let viewCountK = viewCount / 1000;
  viewCountK.toFixed(1);
  viewCount =
    viewCountK > 999
      ? (viewCount / 1000000).toFixed(1) + "M" // Convert to millions if > 999K
      : viewCountK.toFixed(0) + "K"; // Otherwise, stay in thousands

  return (
    <div className="p-2 m-2 shadow-m hover:shadow-2xl cursor-pointer ">
      <img
        src={imgpath}
        alt="thumbnail"
        className="rounded-xl hover:rounded-none"
      />
      <h2 className="break-words whitespace-normal w-full max-w-xs overflow-hidden font-semibold pt-2">
        {Title}
      </h2>
      <h2 className="text font-thin">{channelTitle}</h2>
      <div className="flex">
        <h2 className="text font-thin pr-2">{viewCount} views</h2>
        {/* <h2 className="text font-thin">{publishedAt}</h2> */}
      </div>
    </div>
  );
};

export default VideoCard;
