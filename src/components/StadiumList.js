import axios from "axios";
import React from "react";
import Stadium from "./Stadium";

const baseURL = "http://localhost:3001/api/v1/stadiums";

function StadiumList() {
  const [stadiums, setStadiums] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setStadiums(response.data.stadiums);
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
