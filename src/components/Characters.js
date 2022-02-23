import React, { useState } from "react";
import "./Characters.css";
import Pagination from "./Pagination";
import useFetch from "../useFetch";
const Characters = () => {
  const { data, isLoading, error } = useFetch(
    `https://bobsburgers-api.herokuapp.com/characters`
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setcharactersPerPage] = useState(25);

  // Get characters on the current page
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = data.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {isLoading && <h1 className="loader">Loading...</h1>}
      {error && <h3> Error: Something went wrong</h3>}
      <div className="container">
        <h2 className="text-center pt-4">
          Meet the awesome characters from Bob's Burger
        </h2>
        <div className="image-container">
          {currentCharacters.map((character) => (
            <div className="image-box" key={character.id}>
              <img
                className="character-img"
                src={character.image}
                alt={character.name}
              />
              <p className="character-name">{character.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        itemsPerPage={charactersPerPage}
        totalItems={data.length}
        paginate={paginate}
      />
    </>
  );
};

export default Characters;
