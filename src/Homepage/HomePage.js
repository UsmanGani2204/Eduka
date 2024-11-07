import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "./InsideHomePage/Navbar";
import Carousal from "./InsideHomePage/Carousal";
import AboutUs from "./InsideHomePage/AboutUs";
import OurBoards from "./InsideHomePage/OurBoards";
import Footer from "./InsideHomePage/Footer";
import Gallery from "./InsideHomePage/Gallery";
import LocateUs from "./InsideHomePage/LocateUs";

function HomePage() {
  
  return (
    <>
      <Navbar />
      <Carousal />
      <AboutUs />
      <OurBoards />
      <Gallery />
      <LocateUs  />
      <Footer />
    </>
  );
}

export default HomePage;
