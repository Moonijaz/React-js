import React from 'react'
import { useState } from 'react'
import './Navbar.css'
export default function Navbar() {
 const [isToogled , setToogle] = useState(false); {/*initially we want to hise our tems thats why we have used here false */}

 const handleIcon = () => {
   setToogle(!isToogled);
 }

  return (
   <>
 <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo" href="#">Coursera</a>
          <div className="navbar-toggle" onClick={handleIcon}>
            <span className="navbar-toggle-icon" ></span>
          </div>
          <div className= {`navbar-menu ${isToogled ? '' : 'active'}`}> {/*it is better to use template string instead of if else */}
            <ul className="navbar-items">
              <li className="navbar-item"><a className="navbar-link" href="#">Home</a></li> {/*seperate css for item bcz we want to give space between each item */}
              <li className="navbar-item"><a className="navbar-link" href="#">Courses</a></li>
              <li className="navbar-item"><a className="navbar-link" href="#">Degrees</a></li>
              <li className="navbar-item"><a className="navbar-link" href="#">For Business</a></li>
            
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}
