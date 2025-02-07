import Footer from "../../components/Footer";
import React from "react";
import Navbar from "../../components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* banner */}
        <p className="text-3xl text-center">Home</p>
         <Footer></Footer>
        </div>
    );
};

export default Home;