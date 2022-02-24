import React, { useState } from "react";
import Pagination from "./Pagination";

const DisplayEpisodes = ({ episodes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage, setEpisodesPerPage] = useState(15);

  // Get episodes on the current page
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(
    indexOfFirstEpisode,
    indexOfLastEpisode
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      
      <div className="container-fluid main-container">
        <div className="card-display my-4">
          {currentEpisodes.map((episode) => (
            <div className="single-card">
              <p>
                <span>Title: </span> {episode.name.replace(/^"|"$/g, "")}
              </p>
              <p>
                <span>Aired on: </span>
                {episode.airDate}
              </p>
              <p>
                <span>Total-viewers: </span> {episode.totalViewers}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        itemsPerPage={episodesPerPage}
        totalItems={episodes.length}
        paginate={paginate}
      />
    </>
  );
};

export default DisplayEpisodes;
