import React from "react";
import axios from "axios";

function Stadium({ stadium }) {
  const [stadiumDetail, setStadiumDetail] = React.useState({});
  const getStadiumDetails = () => {
    axios
      .get(`http://localhost:3001/api/v1/stadiums/${stadium.id}`)
      .then((response) => {
        setStadiumDetail(response.data.stadium);
      });
  };

  // to get the images of team logo
  const teamNameSplit = stadium.team.split(" ");
  const teamNameAbbrev =
    stadium.team === "Boston Red Sox" || stadium.team === "Chicago White Sox"
      ? teamNameSplit.slice(teamNameSplit.length - 2).join("")
      : teamNameSplit[teamNameSplit.length - 1];

  return (
    <>
      <img
        onClick={getStadiumDetails}
        src={process.env.PUBLIC_URL + `/images/${teamNameAbbrev}.svg`}
        alt="Stadium"
        width="500"
        height="500"
      />
      {stadiumDetail && <p>{stadiumDetail?.name}</p>}
    </>
  );
}

export default Stadium;
