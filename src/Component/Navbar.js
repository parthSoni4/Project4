import React from 'react'
import logo from "./Images/logo.svg";
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className='navbar navbar-expand'>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <img src={logo} alt="" className="navbar-logo" />
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" id='navbarDropdown'>
                        Delhi
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/" className="dropdown-item">One</a></li>
                        <li><a href="/" className="dropdown-item">two</a></li>

                    </ul>
                </li>
                <li className='nav-item'>
                    <form action="" className='d-flex'>
                        <input type="text" className="form-control me-2 search-box" />
                        {/* <button className="btn bnt-outline-primary">Search</button> */}
                    </form>


                </li>
                <li className="nav-item call-number">
                     <a href="/" className='call-number'> call -2222 3333 4444</a>
                </li>
                <li className="nav-item">
                    <a href="Button" className="btn btn-primary button-usual">button </a>
                </li>

            </ul>
            
    </nav>
    <section className='red-navbar'>
        <ul className='navbar-red-ul'>
            <li><a href="/">ENT</a></li>
            <li><a href="/">Gynecology</a></li>
            <li><a href="/">Protology</a></li>
            <li><a href="/">Laproscopy</a></li>
            <li><a href="/">Urology</a></li>
            <li><a href="/">Othology</a></li>

        </ul>

    </section>
    </>
  )
}
