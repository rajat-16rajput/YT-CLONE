import React from "react";
import Button from "./Button";

const BtnList = () => {
  const btnList = [
    "Vlogs",
    "Gaming",
    "Tech",
    "Educational ",
    "Lifestyle",
    "Cooking",
    "Podcasts",
    "Fashion",
    "DIY ",
    "Music Videos",
    "Travel",
    "ASMR",
  ];

  return (
    <div className="flex">
      {btnList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default BtnList;
