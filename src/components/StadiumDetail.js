import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

const baseURL = "http://localhost:3001/api/v1/stadiums";

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function StadiumDetail() {
  // have to look into caching etc., GET stadium endpoint has redundant data oh well, only has reviews that the LIST view didn't
  const [stadiumDetails, setStadiumDetails] = React.useState({});

  React.useEffect(() => {
    axios.get(baseURL + `/${location.state.id}`).then((response) => {
      console.log(response.data.stadium);
      setStadiumDetails(response.data.stadium);
    });
  }, []);
  let location = useLocation();
  console.log("STADIUM DETAIL", location.state);
  console.log(stadiumDetails);
  return (
    <div>
      <h1>{location.state.name}</h1>
      {!isEmpty(stadiumDetails) &&
        stadiumDetails.reviews.map((review) => {
          return <p>{review.text}</p>;
        })}
    </div>
  );
}

export default StadiumDetail;
