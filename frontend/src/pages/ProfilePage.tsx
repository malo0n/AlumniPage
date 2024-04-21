import React from "react";
import { Header } from "../components/reusable/Header";
import { Main } from "../components/personalPage/App";
import { useQuery } from "react-query";
import { fetchProfile } from "../api/queries";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import ErrorPage404 from "./ErrorPage404";
function ProfilePage() {
  const id = Number(useParams().profileId);
  const { data, isLoading, isError } = useQuery("Person", () => fetchProfile(id));
  if (isLoading) return <BeatLoader className='loader' color='#8000ff' speedMultiplier={0.7} />;
  if (isError) return <>Error</>;
  if (!data) return <ErrorPage404></ErrorPage404>;
  console.log(data);
  return (
    <>
      <Header></Header>
      <Main data={data}></Main>
    </>
  );
}

export default ProfilePage;
