import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="font-bold flex align-middle p-4 m-4 ">
      <h1>Error, Something went wrong</h1>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  );
};

export default Error;
