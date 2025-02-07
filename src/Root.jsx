import React from "react";

// import { Outlet } from 'react-router';
import { Outlet } from "react-router-dom";
const Root=()=> {

  return (
    <div className="">
      <Outlet></Outlet>
    </div>
  )
}

export default Root;
