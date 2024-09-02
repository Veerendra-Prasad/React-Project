import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-16 bg-sky-300 flex justify-center items-center overflow-hidden">
      <div className="min-w-full h-full flex justify-around items-center font-mono font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
}

export default Header;
