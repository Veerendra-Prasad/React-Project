import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Error from "./components/Error";
import First from "./components/First";
import Todo from "./components/1-Todo-list/Todo";
import Tenzies from "./components/2-Tenzies/Tenzies";
import Birthday from "./components/3-Birthday/Birthday";
import Grocery from "./components/4-Grocery/Grocery.jsx";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<NavBar />}>
        <Route index element={<First />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/todo" element={<Todo />} />
        <Route path="/projects/tenzies" element={<Tenzies />} />
        <Route path="/projects/birthday" element={<Birthday />} />
        <Route path="/projects/grocery" element={<Grocery />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
