import React from 'react';
import {Header} from '../components/base/Header';
import {Main} from '../components/allProfiles/Main';
import { useQuery } from 'react-query';
import {fetchAllProfiles} from "../api/queries";
import {BeatLoader} from "react-spinners";
function Profiles (){
  const { data, isLoading, isError } = useQuery("Profiles", () => fetchAllProfiles());
  if (isLoading) return <BeatLoader className='loader' color="#8000ff" speedMultiplier={0.7}/>;
  if (isError) return <>Error</>;
  return (
    <>
      <Header></Header>
      <Main data={data}></Main>
    </>
  )
}

export default Profiles;