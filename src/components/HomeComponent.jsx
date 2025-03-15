import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="navbar">
        {/* Navbar content */}
      </header>

      <div className="content-container">
        <img
          src="/images/audic.jpg"
          alt="Car"
          className="background-image"
        />
        <div className="button-box">
          <h2>Welcome to Voyage</h2>
          <p>Find the best deals on rental cars across various sites.</p>
          <Link to="/car-rental">
            <button className="button">Browse Cars</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;