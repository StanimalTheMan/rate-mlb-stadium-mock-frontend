import React from "react";
import { useNavigate } from "react-router-dom";

function Stadium({ stadium }) {
  let navigate = useNavigate();
  // const [stadiumDetail, setStadiumDetail] = React.useState({});
  const getStadiumDetails = () => {
    console.log("here");
    navigate(`/stadiums/${stadium.name}`, { state: stadium });
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
    </>
  );
}

export default Stadium;
