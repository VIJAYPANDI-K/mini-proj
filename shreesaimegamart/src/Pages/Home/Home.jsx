import React from "react";
import About from "../../Components/About/About";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Products />
      <About />
    </>
  );
};

export default Home;
