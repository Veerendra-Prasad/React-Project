import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Sidebar from "./Sidebar";

function Header() {
  const { show, showsidebar } = useGlobalContext();

  const styles = {
    display: showsidebar ? "flex" : "none",
  };

  return (
    <div>
      <div className="w-full h-16 bg-sky-300 flex justify-end sm:justify-center items-center overflow-hidden">
        <div className="w-2/3 h-full px-3 sm:text-2xl sm:-mt-1 sm:w-1/3 flex justify-start sm:justify-center items-center text-xl font-semibold">
          MyBlog
        </div>
        <div className="hidden justify-around items-center font-mono font-medium sm:w-full sm:h-full sm:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="w-1/3 h-full flex items-center justify-end sm:justify-center px-5">
          <button className="w-9 h-9 flex justify-center items-center border-2 border-black rounded-md hover:text-white hover:bg-black hover:border-white bg-slate-200" onClick={show}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        style={styles}
        className="w-full h-full absolute backdrop-blur-md justify-end"
      >
        <Sidebar />
      </div>
    </div>
  );
}

export default Header;
