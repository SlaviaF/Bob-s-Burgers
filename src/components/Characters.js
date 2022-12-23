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
  const [filterQuery, setFilterQuery] = useState("");
  // Get characters on the current page
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = data.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );
  //Filtered items for the input field
  const filteredItems = currentCharacters.filter((character) =>
    character.name.toLowerCase().includes(filterQuery.toLowerCase())
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {error && <h3> Error: Something went wrong</h3>}
      <div className="container character-container">
        <h2 className="text-center pt-4">
          Meet the awesome characters from Bob's Burger
        </h2>

        <input
          type="text"
          name="filterQuery"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        {isLoading && <h1 className="loader">Loading...</h1>}

        {/*Conditional rendering of the Characters for the input field*/}
        <div className="image-container">
          {filterQuery
            ? filteredItems.map((character) => (
                <div className="image-box" key={character.id}>
                  <img
                    className="character-img"
                    src={character.image}
                    alt={character.name}
                  />
                  <p className="character-name">{character.name}</p>
                </div>
              ))
            : currentCharacters.map((character) => (
                <div className="image-box" key={character.id}>
                  <img
                    className="character-img"
                    src={character.image}
                    alt={character.name}
                  />
                  <p className="character-name">{character.name}</p>
                </div>
              ))}
          {filteredItems.length <= 0 && !isLoading &&(
            <h3 className="no-character-msg">
              I wonder who is it that your looking for....
            </h3>
          )}
        </div>
      </div>
      <Pagination
        itemsPerPage={charactersPerPage}
        totalItems={filterQuery ? filteredItems.length : data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default Characters;
