import React from "react";
import { useLocation } from "react-router-dom";

function StadiumDetail() {
  let location = useLocation();
  console.log("STADIUM DETAIL", location.state);
  return (
    <div>
      <h1>{location.state.name}</h1>
    </div>
  );
}

export default StadiumDetail;
