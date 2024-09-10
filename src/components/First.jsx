import React, { useContext } from "react";
import photo from "../assets/space-3.avif";
import { Link } from "react-router-dom";
import personalphoto from "../assets/passport-photo.jpeg";
import logo from "../assets/react.svg";
import html from "../assets/html_image.webp";
import css from "../assets/css_image.png";
import javascript from "../assets/javascript_image.png";
import node from "../assets/node_js.png";
import express_logo from "../assets/express_image.png";

function First() {
  return (
    <div className="w-full h-screen">
      <div className="-z-50 absolute w-full h-full overflow-hidden">
        <img src={photo} className="h-full w-full object-cover" />
      </div>
      <div className="w-full h-screen flex flex-col gap-10 sm:flex-row">
        <div className="w-full h-2/6 sm:w-1/3 sm:h-full flex justify-start items-center">
          <div className="w-48 h-48 sm:w-72 sm:h-72 border-white border-2 rounded-full overflow-hidden mx-auto">
            <img src={personalphoto} />
          </div>
        </div>
        <div className="w-full flex justify-start items-start text-center sm:w-2/3 sm:h-full sm:items-center sm:text-start">
          <div className="px-4 font-bold sm:text-5xl text-4xl text-white flex flex-col gap-10">
            <h1>Hello, Welcome to my Website</h1>
            <div className=" w-full h-full flex gap-5 flex-col sm:flex-row">
              <h1 className="text-2xl sm:text-3xl font-semibold">Tech Stack</h1>
              <div className="sm:w-1/2 px-3 flex justify-start items-center  gap-4">
                <div className="w-10 p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={html} className="object-contain" />
                  </div>
                </div>
                <div className="w-10 p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={css} className="object-contain" />
                  </div>
                </div>
                <div className="w-10 p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={javascript} className="object-contain" />
                  </div>
                </div>
                <div className="w-10  p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={node} className="object-contain" />
                  </div>
                </div>
                <div className="w-10  p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={express_logo} className="object-contain" />
                  </div>
                </div>
                <div className="w-10  p-1 bg-slate-100 flex justify-center items-center rounded-full">
                  <div className="p-1">
                    <img src={logo} className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:-my-20 -my-36 w-full flex justify-around items-center sm:flex-row flex-col gap-4">
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
