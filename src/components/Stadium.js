import React from "react";

function Stadium({ stadium }) {
  return (
    <img src={stadium.image} alt="Stadium Image" width="500" height="500" />
  );
}

export default Stadium;
