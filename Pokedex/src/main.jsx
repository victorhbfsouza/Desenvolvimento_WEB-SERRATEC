import React from 'react';
import ReactDOM from 'react-dom/client';
import { AllRoutes } from './routes/AllRoutes';
import { GlobalStyle } from './common/style/global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AllRoutes />
      <GlobalStyle/>
  </React.StrictMode>
);