import Footer from "../../components/Footer";
import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      {/* banner */}
      <Banner></Banner>
      <p className="text-3xl text-center">Home</p>
      <Footer></Footer>
    </div>
  );
};

export default Home;
