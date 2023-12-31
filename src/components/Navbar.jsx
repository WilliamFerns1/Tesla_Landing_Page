import { Link, Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { whereToRickRoll } from "./utils.jsx"
import SignIn from '../pages/Signin/SignIn.jsx'

import { seeIfLoggedIn } from "../pages/Signin/SignIn.jsx"

import Menu from "./Menu.jsx"

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  function logOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("emailVerified");
    localStorage.removeItem("displayName");
    localStorage.removeItem("photoURL");
    setIsLoggedIn(false);
    window.location.reload();
  }
  return (
    <>
      <header>
        <Link to="/home">
          <svg id="logo" className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
        </Link>
        <nav className="center desktop">
          <Link to="model-s">Model S</Link>
          <Link to="model-3">Model 3</Link>
          <Link to="model-x">Model X</Link>
          <Link to="model-y">Model Y</Link>
          <Link to="roof">Solar Roof</Link>
          <Link to="contact-me">Contact Me</Link>
        </nav>
        <nav className="right">
          <div className="shop-link">
          {isLoggedIn ? (
              <button onClick={logOut}>Log-out</button>
            ) : (
              <Link to="/">Login</Link>
            )}
          </div>
          <div className="account-link">
            <Link to="account">Account</Link>
            
          </div>
          <button onClick={toggleMenu}>Menu</button>
        </nav>
      </header>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>
      <Outlet />
    </>
  )
}