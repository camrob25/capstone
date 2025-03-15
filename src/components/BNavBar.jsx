import React from 'react';
import '../assets/css/BNavBar.css';
import { Link } from "react-router-dom";

const BNavbar = () => {
  return (
    <div className="Bnavbar">
      <h1>Voyage</h1>
      <ul className="Bnavbar-links">
      <li className="Bnav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="Bnav-item">
          <Link className="nav-link" to="/car-rental">Car Rental </Link>
        </li>
        <li className="Bnav-item">
          <a className="nav-link" href="https://www.enterprise.com">Enterprise</a>
        </li>
        <li className="Bnav-item">
          <a className="nav-link" href="https://www.thrifty.com">Thrifty</a>
        </li>
        <li className="Bnav-item">
          <a className="nav-link" href="https://www.hertz.com">Hertz</a>
        </li>
        <li className="Bnav-item">
          <Link className="nav-link" to="/bargraph">Compare Rates</Link>
        </li>
        <li className="Bnav-item">
          <Link className="nav-link" to="/find-car">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default BNavbar;