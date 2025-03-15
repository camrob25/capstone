import React from "react";
import Content from "../components/HomeComponent";
import BNavbar from "../components/BNavBar";
import Bfooter from "../components/Bfooter";
const Home = () => {
  return (
    <div>
        <BNavbar/>
      <Content/>
      <Bfooter/>
    </div>
  );
};

export default Home;