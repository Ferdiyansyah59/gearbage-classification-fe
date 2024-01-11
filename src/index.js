import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Classification from './classification';
import Home from './home';
import Guide from './home/guide';
import Aos from 'aos';
import Components from './home/components/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/klasifikasi',
    element: <Classification />,
  },
  {
    path: '/panduan',
    element: <Guide />,
  },
  {
    path: '/tentang',
    element: <Components />,
  },
  {
    path: '/faq',
    element: <Components />,
  },
  {
    path: '/bahaya',
    element: <Components />,
  },
  {
    path: '/jenis',
    element: <Components />,
  },
  {
    path: '/dampak',
    element: <Components />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
