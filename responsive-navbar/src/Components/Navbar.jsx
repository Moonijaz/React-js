import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
   <>
 <nav class="navbar">
        <div class="navbar-container">
          <a class="navbar-logo" href="#">Coursera</a>
          <div class="navbar-toggle">
            <span class="navbar-toggle-icon"></span>
          </div>
          <div class="navbar-menu">
            <ul class="navbar-items">
              <li class="navbar-item"><a class="navbar-link" href="#">Home</a></li> {/*seperate css for item bcz we want to give space between each item */}
              <li class="navbar-item"><a class="navbar-link" href="#">Courses</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#">Degrees</a></li>
              <li class="navbar-item"><a class="navbar-link" href="#">For Business</a></li>
            
            </ul>
          </div>
        </div>
      </nav>
   </>
  )
}
