import React, { useState } from "react";
import useFetch from "../useFetch";
import "./ViewerInfo.css";
const ViewerInfo = () => {
  const [value, setValue] = useState("");
  const { data, isLoading, error } = useFetch(
    `https://bobsburgers-api.herokuapp.com/episodes`
  );
  const seasonsList = data.map((item) => item.season);
  const seasons = [...new Set(seasonsList)];
  const filteredSeasons = data.filter(
    (item) => parseInt(item.season) === parseInt(value)
  );
  const mapTotalViewers = filteredSeasons.map((item) =>
    parseFloat(item.totalViewers)
  );
  // calculation for Total & Average Viewers
  let totalViewers = mapTotalViewers
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0)
    .toFixed(2);
  const AverageViewers = (
    parseFloat(totalViewers) / parseInt(mapTotalViewers.length)
  ).toFixed(2);
 
  const minViewers = Math.min(...mapTotalViewers);
  const maxViewers = Math.max(...mapTotalViewers);
  return (
    <>
      {isLoading && <h2 className="loader">Loading...</h2>}
      {error && <h3> Error: Something went wrong</h3>}
      <div className="viewer-info-container">
      <div className="card-display my-4">
       <h3> Enter Season to get details on the Viewership</h3>
      </div>
      <div className="dropdown-opt">
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="">Select episode</option>
          {seasons.map((season) => (
            <option
              key={`season ${season}`}
              value={season}
            >{`season ${season}`}</option>
          ))}
        </select>
      </div>
      {value && (
        <div className="viewer-info">
          <p><span>Total Viewers :</span> {`${totalViewers} Million`}</p>
          <p><span>Average Viewers :</span>{` ${AverageViewers} Million`}</p>
          <p><span>Minimum Viewers :</span> {`${minViewers} Million`}</p>
          <p><span>Maximum Viewers :</span> {`${maxViewers} Million`}</p>
        </div>
       
      )}
       </div>
  
    </>
  );
};

export default ViewerInfo;
