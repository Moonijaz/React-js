import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
              <li className="navbar-item"> <Link to="/" className="navbar-link"> Home </Link> </li>
              <li className="navbar-item"> <Link to="/coursesPage" className="navbar-link"> Courses </Link> </li>
              <li className="navbar-item"> <Link to="/degreesPage" className="navbar-link"> Degrees </Link> </li>
              <li className="navbar-item"> <Link to="/businessPage" className="navbar-link"> For Business </Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
