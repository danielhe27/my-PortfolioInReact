import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import App from './App';
import Error from './pages/Error';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <About/> },  
      { path: 'resume', element: <Resume /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Portfolio /> }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
