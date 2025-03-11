
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Body.css";

const content = () => {
  return (
    <main>
      <div className="button-box">
        <h2>Welcome to Voyage</h2>
        <p>Find the best deals on rental cars across various sites.</p>
        <Link to="/car-rental">
          <button className="button">Browse Cars</button>
        </Link>
      </div>
    </main>
  );
};

export default content;


  