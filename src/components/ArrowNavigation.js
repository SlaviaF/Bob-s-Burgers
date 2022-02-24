import React from "react";
import './ArrowNavigation.css'
const ArrowNavigation = ({ currentPage, setCurrentPage }) => {
const pageUp=()=>{
    setCurrentPage(currentPage+1)
  }
  const pageDown=()=>{
    setCurrentPage(currentPage-1)
  }
  return (
    <div className="arrow-container">
      <button className="back-arrow arrow"onClick={pageUp}>&lt;</button>
      <button className="front-arrow arrow"onClick={pageDown}>&gt;</button>
    </div>
  );
};

export default ArrowNavigation;
