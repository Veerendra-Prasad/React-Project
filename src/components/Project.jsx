import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-700 text-white">
      <h1 className="text-xl font-semibold my-5 py-5">Projects</h1>
      <div className="w-2/3 sm:w-full sm:justify-center my-10 flex flex-wrap gap-5 overflow-y-scroll">
        <Link to="/projects/todo">
          <div className="w-60 h-60 bg-gray-200 rounded-md">
            <div className="w-full h-40 p-5 font-semibold text-lg text-black bg-white rounded-tl-md rounded-tr-md">
              <h1>Todo-List App</h1>
            </div>
            <div className="w-full h-20 flex justify-center items-center">
              <button className="w-28 h-9 bg-sky-500 rounded-md border-2 border-black hover:border-sky-400 hover:bg-gray-100 hover:text-black hover:font-semibold">
                Source Code
              </button>
            </div>
          </div>
        </Link>
        <Link to="/projects/tenzies">
          <div className="w-60 h-60 bg-gray-200 rounded-md">
            <div className="w-full h-40 p-5 font-semibold text-lg text-black bg-white rounded-tl-md rounded-tr-md">
              <h1>Tenzies</h1>
            </div>
            <div className="w-full h-20 flex justify-center items-center">
              <button className="w-28 h-9 bg-sky-500 rounded-md border-2 border-black hover:border-sky-400 hover:bg-gray-100 hover:text-black hover:font-semibold">
                Source Code
              </button>
            </div>
          </div>
        </Link>
        <Link to="/projects/birthday">
          <div className="w-60 h-60 bg-gray-200 rounded-md">
            <div className="w-full h-40 p-5 font-semibold text-lg text-black bg-white rounded-tl-md rounded-tr-md">
              <h1>Birthday Remainder</h1>
            </div>
            <div className="w-full h-20 flex justify-center items-center">
              <button className="w-28 h-9 bg-sky-500 rounded-md border-2 border-black hover:border-sky-400 hover:bg-gray-100 hover:text-black hover:font-semibold">
                Source Code
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Project;
