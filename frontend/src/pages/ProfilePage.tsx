import { Header } from "../components/shared/Header";
import { App } from "../components/personalPage/App";
import { useQuery } from "react-query";
import { fetchProfile } from "../api/queries";
import { useParams } from "react-router-dom";
import ErrorPage404 from "./ErrorPage404";
import Loader  from "./Loader";
function ProfilePage() {
  const id = Number(useParams().profileId);
  const { data, isLoading, isError } = useQuery("Person", () => fetchProfile(id));
  if (isError) return <>Error</>;
  if (isLoading)
    return <Loader/> ;
  if (!data) return <ErrorPage404></ErrorPage404>;
  return (
    <>
      <Header></Header>
      <App {...data}></App>
    </>
  );
}

export default ProfilePage;
