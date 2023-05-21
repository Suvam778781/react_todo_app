import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar';
import { useLocation} from "react-router-dom"

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      {(location.pathname=="/"||"/dashboard")&&<Navbar/>}
    <AllRoutes/>
    </div>
  );
}

export default App;
