import React from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom";

function Sidebar() {
  const { hide } = useGlobalContext();
  return (
    <div className="bg-slate-100 absolute sm:w-1/3 w-full h-2/4 rounded-b-md">
      <div className="w-full h-1/3 flex justify-around items-center px-10">
        <h2 className="font-semibold text-lg">MyBlog</h2>
        <button
          className="w-7 h-7 border-2 border-black rounded-md text-white bg-sky-500 ml-auto"
          onClick={hide}
        >
          X
        </button>
      </div>
      <div className="h-2/3 pt-5">
        <ul className="w-full flex flex-col gap-4 justify-center items-center font-lg font-semibold">
          <li className="w-full flex justify-center items-center hover:bg-sky-100 h-12">
            <Link to="/">Home</Link>
          </li>
          <li className="w-full flex justify-center items-center hover:bg-sky-100 h-12">
            <Link to="/about">About</Link>
          </li>
          <li className="w-full flex justify-center items-center hover:bg-sky-100 h-12">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
