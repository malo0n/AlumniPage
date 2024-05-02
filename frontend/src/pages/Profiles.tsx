import React from "react";
import { Header } from "../components/shared/Header";
import { Main } from "../components/allProfiles/App";
import { useQuery } from "react-query";
import { fetchAllProfiles } from "../api/queries";
import { AllProfilesData } from "../types/types";
import Loader from "./Loader";
function Profiles(): JSX.Element {
  const { data, isLoading, isError } = useQuery<AllProfilesData, Error>("Profiles", () => fetchAllProfiles());
  if (isLoading)return <Loader/>;
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
