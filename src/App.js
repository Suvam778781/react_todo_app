import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Navbar";
import { useLocation } from "react-router-dom";
import AsminAssignTodo from "./Components/AdminTodoAssign";
import { useCallback, useState } from "react";
import Profile from "./Components/Profile";

function App() {
  const location = useLocation();
  console.log(location);


 
  return (
    <div className="App">

      {location.pathname === '/' || location.pathname === '/dashboard' ? (
        <Navbar />
      ) : null}
      <AllRoutes />

      {/* <Profile /> */}
     
    </div>
  );
}

export default App;
