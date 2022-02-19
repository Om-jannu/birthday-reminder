import React from "react"
import { Route, Router, Routes } from "react-router-dom";
import Empbirthday from "./components/Empbirthday";
import Empdetails from "./components/Empdetails";
import Home from "./components/Home";
import Error from "./components/Error";
import Thismonthbday from "./components/Thismonthbdayss";
// import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='empdetails' element={<Empdetails/>}/>
        <Route path='empbirthday' element={<Empbirthday/>}/>
        <Route path='thismonthbday' element={<Thismonthbday/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
  );
};

export default App;
