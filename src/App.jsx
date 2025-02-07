import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App=()=> {

  return (
    <div className="">
      <Navbar></Navbar>      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App;
