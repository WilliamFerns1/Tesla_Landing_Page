import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Menu(props) {

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div>

      <div className="menu--container">
        <Link onClick={props.toggleMenu} className="backdrop" style={{
          zIndex: props.isOpen ? 1 : -1, 
        }} to="."></Link>
        <div className="menu" style={{ right: props.isOpen ? 0 : "-320px", transition: "right 0.8s ease" }}>
          <Link className="close-menu" to=".." onClick={props.toggleMenu}>
            &times;
          </Link>
          <nav className="menu-links">
            <Link to="model-s" onClick={props.toggleMenu}>
              Model S
            </Link>
            <Link to="model-3" onClick={props.toggleMenu}>
              Model 3
            </Link>
            <Link to="model-x" onClick={props.toggleMenu}>
              Model X
            </Link>
            <Link to="model-y" onClick={props.toggleMenu}>
              Model Y
            </Link>
            <Link to="roof" onClick={props.toggleMenu}>
              Solar Roof
            </Link>
            <Link to="solarpanels" onClick={props.toggleMenu}>
              Solar Panels
            </Link>
            <Link to="existing-inventory" onClick={props.toggleMenu}>
              Existing Inventory
            </Link>
            <Link to="used-inventory" onClick={props.toggleMenu}>
              Used Inventory
            </Link>
            <Link to="trade-in" onClick={props.toggleMenu}>
              Trade-in
            </Link>
            <Link to="test-drive" onClick={props.toggleMenu}>
              Test Drive
            </Link>
            <Link to="powerwall" onClick={props.toggleMenu}>
              Powerwall
            </Link>
            <Link to="commercial-energy" onClick={props.toggleMenu}>
              Commercial Energy
            </Link>
            <Link to="utilities" onClick={props.toggleMenu}>
              Utilities
            </Link>
            <Link to="charging" onClick={props.toggleMenu}>
              Charging
            </Link>
            <Link to="find-us" onClick={props.toggleMenu}>
              Find Us
            </Link>
            <Link to="support" onClick={props.toggleMenu}>
              Support
            </Link>
            <Link to="investor-relations" onClick={props.toggleMenu}>
              Investor Relations
            </Link>
            <Link to="shop" onClick={props.toggleMenu}>
              Shop
            </Link>
            <Link to="account" onClick={props.toggleMenu}>
              Account
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}