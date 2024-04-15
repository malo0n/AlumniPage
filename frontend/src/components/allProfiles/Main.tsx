import React, { useState, useEffect } from "react";
import { Arrow } from "../reusable/buttons/Buttons";
import backArrow from "../../assets/icons/backArrow.svg";
import forwardArrow from "../../assets/icons/forwardArrow.svg";
import { ProfileCard } from "./ui/ProfileCard";
import { allProfilesData } from "../../helpers/data/allProfilesData";
import { AllProfilesData } from "../../types/types";
import { ProfileData } from "../../types/types";
export function Main({ data }: { data: AllProfilesData }) {
  console.log(data);

  const itemsPerPage = 14;
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData]: [AllProfilesData, Function] = useState(
    []
  );

  useEffect(() => {
    const newData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setCurrentData(newData);
  }, [data, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const pageButtons: number[] = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <main className="pt-5 flex flex-col w-[85%] self-center items-center xs:p-[50px] justify-center bg-background gap-5 ">
      <div className="flex flex-row font-notoSans justify-center">
        {currentPage <= 1 ? (
          <Arrow status={"inactive"} src={backArrow} />
        ) : (
          <Arrow status={"active"} src={backArrow} onClick={handlePrevPage} />
        )}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`font-semibold text-openSans text-xs xs:font-normal xs:text-lg border-none inline-block size-[26px] xs:size-8 rounded-md mx-[5px] xs:mx-2 text-center cursor-pointer leading-snug  ${
              pageNumber === currentPage
                ? "bg-black text-white"
                : "bg-[#ECEEF6] text-black"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? (
          <Arrow status={"inactive"} src={forwardArrow} />
        ) : (
          <Arrow
            status={"active"}
            src={forwardArrow}
            onClick={handleNextPage}
          />
        )}
      </div>
      <div className="p-0 gap-[3px]  grid grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(2,1fr)] w-full xs:w-fit self-center lg:gap-5 px-1 py-2">
        {currentData.map((item: ProfileData, index: number) => {
          return (
            <ProfileCard
              key={index}
              href={`/profiles/${item.id}`}
              data={allProfilesData(item)}
            ></ProfileCard>
          );
        })}
      </div>
      <div className="flex flex-row font-notoSans mb-5">
        {currentPage <= 1 ? (
          <Arrow status={"inactive"} src={backArrow} />
        ) : (
          <Arrow status={"active"} src={backArrow} onClick={handlePrevPage} />
        )}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`font-semibold text-openSans text-xs xs:font-normal xs:text-lg border-none inline-block size-[26px] xs:size-8 rounded-md mx-[5px] xs:mx-2 text-center cursor-pointer leading-snug  ${
              pageNumber === currentPage
                ? "bg-black text-white"
                : "bg-[#ECEEF6] text-black"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? (
          <Arrow status={"inactive"} src={forwardArrow} />
        ) : (
          <Arrow
            status={"active"}
            src={forwardArrow}
            onClick={handleNextPage}
          />
        )}
      </div>
    </main>
  );
}
