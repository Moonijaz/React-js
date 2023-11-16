import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
//import { Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CoursesPage from './Components/CoursesPage';
import DegreesPage from './components/DegreesPage';
import BusinessPage from './components/BusinessPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <div>
        <Navbar />

          <Route path="/" exact component={HomePage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/degrees" component={DegreesPage} />
          <Route path="/business" component={BusinessPage} />

      </div>
      </Routes>
    </Router>
  );
};

export default App;
