import React, { useState, useEffect } from 'react';
import { Arrow } from "../buttons/Buttons";
import backArrow from "../../assets/icons/backArrow.svg";
import forwardArrow from "../../assets/icons/forwardArrow.svg";
import { ProfileCard } from "./ProfileCard";
import {profileData} from "../../helpers/profileData";

export function Main({ data }) {
  const itemsPerPage = 14;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const newData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    setCurrentData(newData);
  }, [data, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);
  

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <main className="allProfilesMain">
      <div className="allProfilesMain_slider">
        {currentPage <= 1 ? <Arrow status={"inactive"} src={backArrow}/> : <Arrow status={"active"}src={backArrow} onClick={handlePrevPage} />}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={pageNumber === currentPage ? 'allProfilesMain_slider__button selected' : 'allProfilesMain_slider__button'}>
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? <Arrow status={"inactive"}src={forwardArrow} /> : <Arrow status={"active"}src={forwardArrow} onClick={handleNextPage} />}
      </div>
      <div className="allProfilesMain_cards">
      {currentData.map((item, index) => {
        return <ProfileCard key={index} href={`/profiles/${item.id}`} data={profileData(item)}></ProfileCard>;
      })}
      </div>
      <div className="allProfilesMain_slider">
      {currentPage <= 1 ? <Arrow status={"inactive"}src={backArrow}/> : <Arrow status={"active"}src={backArrow} onClick={handlePrevPage} />}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={pageNumber === currentPage ? 'allProfilesMain_slider__button-selected' : 'allProfilesMain_slider__button'}>
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? <Arrow status={"inactive"} src={forwardArrow} /> : <Arrow status={"active"} src={forwardArrow} onClick={handleNextPage} />}
      </div>
    </main>
  );
}