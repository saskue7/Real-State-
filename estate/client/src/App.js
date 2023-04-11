import Home from "./pages/home/Home.jsx"
import {PropertyDetails} from "./pages/property/Id.jsx"
import  Search from "./pages/search/Search.jsx";
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Login from "./pages/login/Login.jsx";
import { AuthContext } from "./context/AuthContext.js";
import Register from "./pages/register/Register.jsx";
import Data from "./pages/data/data.jsx";
function App() {
  const { user } = useContext(AuthContext)
  localStorage.setItem("user",JSON.stringify(user))
  const state = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  return (

    
    <BrowserRouter >
      <Routes >
        <Route exact path="/" element={ user ?<Home />:<Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={state ? <Navigate to="/" /> : <Register />} />
        <Route  path="/search" element={<Search />} />
        <Route path="/property/:id" element={state ? <PropertyDetails /> : <Navigate to="/" />} />
        <Route path="/saves" element={<Data />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
