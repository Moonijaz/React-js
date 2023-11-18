import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursesPage from "./Components/CoursesPage";
import DegreesPage from "./components/DegreesPage";
import BusinessPage from "./components/BusinessPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>  {/* Setting up BrowserRouter to enable routing in the app*/}
      <Navbar/>
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
