import { Outlet } from 'react-router-dom'; // Importing Outlet from react-router-dom to render nested routes
import NavTabs from './components/NavTabs.jsx'; // Importing NavTabs component
import 'bulma/css/bulma.min.css'; // Importing Bulma CSS
import './App.css'; // Importing custom CSS
import Footer from './components/footer.jsx'; // Importing Footer component

function App() {
  console.log("Rendering App");
  return (
    <>
      {/* Render NavTabs component */}
      <NavTabs /> 
      <div>
        {/* Render the nested routes */}
        <Outlet /> 
      </div>
      {/* Render Footer component */}
      <Footer />
    </>
  );
}

export default App;
