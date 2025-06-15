import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './index.css'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Router';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
