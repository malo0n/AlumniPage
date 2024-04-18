import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";
import Profiles from "./pages/Profiles";
import Greetings from "./pages/Greetings";
import ErrorPage404 from "./pages/ErrorPage404";
import Loader from "./pages/Loader";
import Registration from "./pages/Registration";
import ConfirmPage from "./pages/ConfirmPage";

export default function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "*",
      element: <ErrorPage404 />,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
    {
      path: "/greetings",
      element: <Greetings />,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
    {
      path: "/registration",
      element: <Registration />,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
    {
      path:"/confirm",
      element:<ConfirmPage/>,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
    {
      path: "/profiles",
      element: <Profiles />,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
    {
      path: "/profiles/:profileId",
      element: <ProfilePage />,
      loader: async () => {
        return (
          <div className="h-full w-full flex items-center justify-center">
            <Loader />
          </div>
        );
      },
    },
  ]);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
