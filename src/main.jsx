import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RouterPaths } from './configs/RouterPaths.jsx';

const router = createBrowserRouter(RouterPaths);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
