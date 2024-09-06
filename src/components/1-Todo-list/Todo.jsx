import React, { useRef, useState } from "react";
import Card from "./Card";

function Todo() {
  const refContainer = useRef(null);
  const [data, setData] = useState([]);

  function additem() {
    const newitem = refContainer.current.value;
    if (newitem !== "") {
      const item = { id: new Date().getTime().toString(), task: newitem };
      setData((prevData) => [...prevData, item]);
      refContainer.current.value = null;
    }
  }

  function removeitem(id) {
    const newdata = data.filter((item) => {
      return item.id !== id;
    });
    setData(newdata);
  }
  return (
    <div className="w-full h-screen">
      <h1 className="w-full flex justify-center items-center my-10 text-lg font-semibold">
        Todo-list App
      </h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        <label htmlFor="text" className="">
          Enter your task :
        </label>
        <input
          type="text"
          id="text"
          className=" bg-slate-200 p-1 rounded-md "
          ref={refContainer}
        />
        <button
          className="btn"
          onClick={additem}
        >
          Add
        </button>
      </div>
      <div className="my-10 w-full flex-col flex gap-8 justify-center items-center">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              task={item.task}
              remove={removeitem}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
