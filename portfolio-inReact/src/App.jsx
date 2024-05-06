import { Outlet } from  'react-router-dom';
import  navTabs  from './components/navTabs.jsx';

function App() {
  return (
    <div className="App">
      <navTabs />
      <Outlet />
    </div>
  );
}

export default App
