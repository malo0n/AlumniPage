import React, { useState, useEffect } from "react";
import { Arrow } from "../shared/buttons/Buttons";
import backArrow from "../../assets/icons/backArrow.svg";
import forwardArrow from "../../assets/icons/forwardArrow.svg";
import { ProfileCard } from "./ui/ProfileCard";
import { allProfilesData } from "../../helpers/data/allProfilesData";
import { AllProfilesData } from "../../types/types";
import { ProfileData } from "../../types/types";
type Props = {
  data: AllProfilesData;
}
export function Main(props: Props) {
  const data = props.data;
  const itemsPerPage = 14;
  const totalPages: number = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData]: [AllProfilesData, Function] = useState([]);

  useEffect(() => {
    const newData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
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
  const pageButtons: number[] = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <main className='flex w-[85%] flex-col items-center justify-center gap-5 self-center bg-background pt-5 xs:p-[50px] '>
      <div className='flex flex-row justify-center font-notoSans'>
        {currentPage <= 1 ? (
          <Arrow status={"inactive"} src={backArrow} />
        ) : (
          <Arrow status={"active"} src={backArrow} onClick={handlePrevPage} />
        )}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`text-openSans mx-[5px] inline-block size-[26px] cursor-pointer rounded-md border-none text-center text-xs font-semibold leading-snug xs:mx-2 xs:size-8 xs:text-lg xs:font-normal  ${
              pageNumber === currentPage ? "bg-black text-white" : "bg-[#ECEEF6] text-black"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? (
          <Arrow status={"inactive"} src={forwardArrow} />
        ) : (
          <Arrow status={"active"} src={forwardArrow} onClick={handleNextPage} />
        )}
      </div>
      <div className='grid w-full  grid-cols-[repeat(1,1fr)] gap-[3px] self-center p-0 px-1 py-2 xs:w-fit lg:grid-cols-[repeat(2,1fr)] lg:gap-5'>
        {currentData.map((item: ProfileData, index: number) => {
          return <ProfileCard key={index} href={`/profiles/${item.id}`} data={allProfilesData(item)}></ProfileCard>;
        })}
      </div>
      <div className='mb-5 flex flex-row font-notoSans'>
        {currentPage <= 1 ? (
          <Arrow status={"inactive"} src={backArrow} />
        ) : (
          <Arrow status={"active"} src={backArrow} onClick={handlePrevPage} />
        )}
        {pageButtons.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`text-openSans mx-[5px] inline-block size-[26px] cursor-pointer rounded-md border-none text-center text-xs font-semibold leading-snug xs:mx-2 xs:size-8 xs:text-lg xs:font-normal  ${
              pageNumber === currentPage ? "bg-black text-white" : "bg-[#ECEEF6] text-black"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {currentPage >= totalPages ? (
          <Arrow status={"inactive"} src={forwardArrow} />
        ) : (
          <Arrow status={"active"} src={forwardArrow} onClick={handleNextPage} />
        )}
      </div>
    </main>
  );
}
