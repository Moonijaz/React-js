import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import HomePage from "./Components/HomePage/HomePage";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import DegreesPage from "./Components/DegreesPage/DegreesPage";
import BusinessPage from "./Components/BusinessPage/BusinessPage";

const App = () => {
  return (
    <BrowserRouter>  {/* Setting up BrowserRouter to enable routing in the app*/}
      <Navbar home= "Home" Courses= "Courses" Degrees= "Degrees" For_Business="For Business"/> {/* Setting props values here that will be displayed in navbar*/}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/BusinessPage" element={<BusinessPage />}></Route>
        <Route path="/CoursesPage" element={<CoursesPage />}></Route>
        <Route path="/DegreesPage" element={<DegreesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
