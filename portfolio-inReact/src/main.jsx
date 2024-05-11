import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import './index.css'; // Import custom CSS

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import necessary components from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import App from './App'; // Import App component
import Error from './pages/Error'; // Import Error component
import Resume from './pages/Resume'; // Import Resume component
import About from './pages/About'; // Import About component
import Contact from './pages/Contact'; // Import Contact component
import Portfolio from './pages/Portfolio'; // Import Portfolio component

// Create a browser router with route configuration
const router = createBrowserRouter([
  { 
    path: '/', // Root path
    element: <App />, // Render the App component
    errorElement: <Error />, // Render the Error component for any errors
    children: [
      { index: true, element: <About/> }, // Render the About component as the index route
      { path: 'resume', element: <Resume /> }, // Render the Resume component for the '/resume' path
      { path: 'contact', element: <Contact /> }, // Render the Contact component for the '/contact' path
      { path: 'portfolio', element: <Portfolio /> } // Render the Portfolio component for the '/portfolio' path
    ],
  },
]);

// Render the RouterProvider with the created router
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
