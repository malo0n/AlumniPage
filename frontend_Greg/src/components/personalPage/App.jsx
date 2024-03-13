import React from 'react';
import {Header} from './blocks/Header';
import {Main} from './blocks/Main';
import { useQuery } from 'react-query';
import {fetchData} from "../../api/queries"
import {BeatLoader} from "react-spinners";
function App ({id}){
  const { data, isLoading, isError } = useQuery("Person", () => fetchData(id));
  if (isLoading) return <BeatLoader className='loader' color="#8000ff" speedMultiplier={0.7}/>;
  if (isError) return <></>;
  if (!data) return <></>;
  return (
    <>
      <Header></Header>
      <Main data={data}></Main>
    </>
  )
}

export default App;