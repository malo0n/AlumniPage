import React from "react";
import { Header } from "../components/reusable/Header";
import { Main } from "../components/allProfiles/App";
import { useQuery } from "react-query";
import { fetchAllProfiles } from "../api/queries";
import { BeatLoader } from "react-spinners";
import { AllProfilesData } from "../types/types";
function Profiles(): JSX.Element {
  const { data, isLoading, isError } = useQuery<AllProfilesData, Error>("Profiles", () => fetchAllProfiles());
  if (isLoading)
    return (
      <div className='absolute left-[50%] top-[50%]'>
        <BeatLoader className='loader' color='#8000ff' speedMultiplier={0.7} />
      </div>
    );
  if (isError) return <>Error</>;
  if (!data) return <div>Error</div>;
  return (
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default Profiles;
