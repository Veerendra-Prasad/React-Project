import React from "react";

function About() {
  return (
    <div className="w-full h-screen sm:h-screen bg-gray-700 text-white">
      <h1 className="p-4 font-semibold text-4xl border-b-4 rounded-lg">
        About
      </h1>
      <p className="p-4 text-lg">
        As a dedicated front-end developer in React, I
        am passionate about crafting intutitve and visually compelling user
        interfaces. My skills in React enable me to build dynamic, responsive
        web applications that prioritize user experience and accessibilty. I
        thrive on solving complex problems and turning ideas into functional
        designs. Committed to continuous learning, I stay updated with industry
        trends and best practices. My goal is to contribute to innovative
        projects that enchance user engagement and deliver high-quality,
        impactful web solutions.
      </p>
      <br />
      <p className="-my-4 p-4 text-lg">
        This Website is build using React library, the routing is done through
        React-Router-DOM the styling is done through tailwind css framework. The
        projects stand as proof of my knowledge in the React Library and my
        understanding of it
      </p>
    </div>
  );
}

export default About;
