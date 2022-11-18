import React from "react";
import MapCards from "./components/cards";
import HeroSection from "./components/Herosection";
import Header from "./components/Header/index";
import OurServices from "./components/Specialoffer/index.js"
import Footer from "./components/footer/index";
const App = () => {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <MapCards />
      <OurServices/>
      <Footer/>
    </div>
  );
};
export default App;
