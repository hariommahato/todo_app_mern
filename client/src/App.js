import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// components

import Login from "./components/Login";
import SignIn from "./components/signin";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
