import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default NavBar;
