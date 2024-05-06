import ReactDOM from 'react-dom/client'
import React from 'react';

import 'boostrap/dist/css/boostrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';
// import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
