import React from "react";
import photo from "../assets/space-3.avif";
import { Link } from "react-router-dom";
import personalphoto from "../assets/passport-photo.jpeg";

function First() {
  return (
    <div className="w-full">
      <div className="-z-50 absolute w-full h-full overflow-hidden">
        <img src={photo} className="h-full w-full object-cover"/>
      </div>
      <div className="w-full h-screen flex flex-col gap-10 sm:flex-row  ">
        <div className="w-full h-2/6 sm:w-1/3 sm:h-full flex justify-start items-center">
          <div className="w-48 h-48 sm:w-72 sm:h-72 border-white border-2 rounded-full overflow-hidden mx-auto">
            <img src={personalphoto} />
          </div>
        </div>
        <div className="w-full flex justify-start items-start text-center sm:w-2/3 sm:h-full sm:items-center sm:text-start">
          <div className="px-4 font-bold sm:text-5xl text-4xl text-white">
            <h1 className="pt-3 px-2">Hello,</h1>
            <h2 className="px-2">Welcome to my Website</h2>
          </div>
        </div>
      </div>
      <div className="sm:-my-20 -my-48 w-full flex justify-around items-center sm:flex-row flex-col gap-4">
        <Link to="/about">
          <button className="w-36 rounded-md h-10 text-white bg-blue-600 border-2">
            More About Me
          </button>
        </Link>
        <Link to="/projects">
          <button className="w-36 rounded-md h-10 text-white bg-blue-600 border-2">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default First;
