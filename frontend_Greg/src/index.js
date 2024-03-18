import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import Profiles from './pages/Profiles';
import ErrorPage404 from './pages/ErrorPage404';
import {BeatLoader} from "react-spinners";


import "./scss/main.scss";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage404/>
  },
  {
    path: "/profiles",
    element: <Profiles/>,
    loader: async()=>{
      <BeatLoader className='loader' color="#8000ff" speedMultiplier={0.7}/>;
    }
  },
  {
    path: "/profiles/:profileId",
    element: <ProfilePage/>,
    loader: async()=>{
      <BeatLoader className='loader' color="#8000ff" speedMultiplier={0.7}/>;
    }
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
  , document.getElementById('root'));