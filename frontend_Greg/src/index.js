import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import {testId} from "./helpers/testData"; //! test
import App from './components//personalPage/App';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App id={testId}></App>
    </QueryClientProvider>
  </React.StrictMode>
  , document.getElementById('root'));