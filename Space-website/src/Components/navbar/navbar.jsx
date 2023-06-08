import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Navbar.css"

export default function Navbar(props) {
  const [isTogled, setTogle] = useState(true);

  const handleIcon = () => {
    setTogle(!isTogled);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Coursera
          </Link>
          <div className="navbar-toggle" onClick={handleIcon}>
            <span className="navbar-toggle-icon"></span>
          </div>
          <div className={`navbar-menu ${isTogled ? '' : 'active'}`}> {/*we have used this instead of if else */}
            <ul className="navbar-items">
              <li className="navbar-item"> <Link to="/" className="navbar-link"> {props.home} </Link> </li>
              <li className="navbar-item"> <Link to="/coursesPage" className="navbar-link"> {props.Courses} </Link> </li>
              <li className="navbar-item"> <Link to="/degreesPage" className="navbar-link"> {props.Degrees} </Link> </li>
              <li className="navbar-item"> <Link to="/businessPage" className="navbar-link"> {props.For_Business} </Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototype = {
    home : PropTypes.string,
    Courses : PropTypes.string,
    Degrees : PropTypes.string,
    For_Business : PropTypes.string,
}