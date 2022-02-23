//import React,{useState, useEffect} from 'react'
import DisplayEpisodes from "./DisplayEpisodes";
import useFetch from "../useFetch";

const FetchEpisodes = () => {
  const { data, isLoading, error } = useFetch(
    `https://bobsburgers-api.herokuapp.com/episodes`
  );
  return (
    <div>
      {isLoading && <h1 className="loader">Loading...</h1>}
      {error && <h3> Error: Something went wrong</h3>}
      <div className="container">
        <DisplayEpisodes episodes={data} />
      </div>
    </div>
  );
};

export default FetchEpisodes;
