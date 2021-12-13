import React from "react";
import axios from "axios";
import Stadium from "./Stadium";
// import { useLocalStorage } from "../useLocalStorage";

const baseURL = "http://localhost:3001/api/v1/stadiums";

function StadiumList() {
  const [stadiums, setStadiums] = React.useState(() => {
    return JSON.parse(localStorage.getItem("stadiums")) || [];
  });

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log("here");
      localStorage.setItem("stadiums", JSON.stringify(response.data.stadiums));
      // setStadiums(JSON.stringify(response.data.stadiums));
    });
  }, []);

  return (
    <>
      <h1>Stadium List</h1>
      {stadiums.map((stadium) => (
        <Stadium key={stadium.id} stadium={stadium} />
      ))}
    </>
  );
}

export default StadiumList;
