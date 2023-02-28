
import "./navbar.css"
import styled from 'styled-components';

import React from 'react'

export default function Navbar() {
  return (
    <div className='nav'>
      <div className="topLeft">
        <i className="navIcon" class="fa-brands fa-pinterest"></i>
        <i className="navIcon"class="fa-brands fa-facebook"></i>
        <i className="navIcon" class="fa-brands fa-instagram"></i>
        <i className="navIcon" class="fa-brands fa-twitter"></i>

      </div>
      <div className="topCenter">
        <ul className="navList">
          <li className="navItems">HOME</li>
          <li className="navItems">ABOUT</li>
          <li className="navItems">CONTACT</li>
          <li className="navItems">WRITE</li>
          <li className="navItems">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
         <img
         className="navImg"
          src="../../../images/profilePhoto.jpeg"
          alt="display image"
         />

         <i className="navSearchBar"class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

