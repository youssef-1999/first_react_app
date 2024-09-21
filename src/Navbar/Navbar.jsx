import React from 'react'
import   './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar customize_navbar navbar-expand-lg fixed-top top-0 ">
        <div className="container">
          <NavLink className="navbar-brand" aria-current="page">
            <h1 className='text-white '>START FRAMEWORK</h1>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  me-2  text-white  mt-2 "   to="about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  me-2 text-white mt-2" to="portflio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  me-2 text-white mt-2" to="contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar
