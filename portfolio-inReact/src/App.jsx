import { Outlet } from  'react-router-dom';
import NavTabs from './components/NavTabs.jsx';
import 'bulma/css/bulma.min.css';
import './App.css';
import Footer from './components/footer.jsx';




function App() {
  console.log("Rendering App");
  return (
    <>
      <NavTabs /> 
      <div>
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
}

export default App;