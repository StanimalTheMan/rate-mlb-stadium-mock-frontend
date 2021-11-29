import React from "react";
// import Mets from "../../public/images/mets.svg";

function Stadium({ stadium }) {
  // to get the images of team logo
  const teamNameSplit = stadium.team.split(" ");
  const teamNameAbbrev =
    stadium.team === "Boston Red Sox" || stadium.team === "Chicago White Sox"
      ? teamNameSplit.slice(teamNameSplit.length - 2).join("")
      : teamNameSplit[teamNameSplit.length - 1];

  return (
    <img
      src={process.env.PUBLIC_URL + `/images/${teamNameAbbrev}.svg`}
      alt="Stadium"
      width="500"
      height="500"
    />
  );
}

export default Stadium;
