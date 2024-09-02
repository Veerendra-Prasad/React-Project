import React, { useRef, useState } from "react";
import Card from "./Card";

function Birthday() {
  const [data, setData] = useState([]);
  const refNameContainer = useRef(null);
  const refDateContainer = useRef(null);
  const [open, setOpen] = useState(false);

  function addpeople() {
    const name = refNameContainer.current.value;
    const date = refDateContainer.current.value;
    if (name && date) {
      const newperson = {
        id: new Date().getTime().toString(),
        name: name,
        date: date,
      };
      setData((oldData) => {
        return [...oldData, newperson];
      });
      setOpen(false);
    }
    refDateContainer.current.value = null;
    refNameContainer.current.value = null;
  }

  function removepeople(id) {
    setData((oldData)=>{
        return oldData.filter((item)=>{
            return item.id !== id
        })
    })
  }

  function opendialog() {
    setOpen(true);
  }

  const styles = {
    display: open ? "flex" : "none",
  };

  return (
    <div className="w-full h-screen">
      <div
        className="w-full h-full backdrop-blur-sm absolute flex justify-center items-center"
        style={styles}
      >
        <div className="w-2/3 sm:w-1/3 h-[50%] sm:h-2/4 bg-slate-200 rounded-md p-5 flex flex-col gap-4">
          <div className="w-full flex">
            <h2 className="text-lg font-semibold">Add a New Person</h2>
            <button className="ml-auto bg-sky-400 w-7 border-2 border-black rounded-md text-white" onClick={()=>(setOpen(false))}>X</button>
          </div>
          <label htmlFor="item">Enter the name:</label>
          <input
            type="text"
            id="item"
            className="w-full p-1 rounded-md"
            ref={refNameContainer}
          />
          <label htmlFor="item">Enter the DOB:</label>
          <input
            type="date"
            id="item"
            className="w-full p-1 rounded-md"
            ref={refDateContainer}
          />
          <div className="w-full flex justify-center items-center h-1/3">
            <button className="btn" onClick={addpeople}>
              Add Person
            </button>
          </div>
        </div>
      </div>

      <h1 className="w-full  flex justify-center items-center p-5 text-xl font-semibold">
        Birthday Remainder
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="sm:w-1/3 w-full p-3 mt-6 bg-slate-100 rounded-md">
          <h1 className="p-4 text-lg font-semibold">
            {data.length} People Birthday
          </h1>
          <div className="flex flex-col gap-5">
            {data.map((item) => {
              return (
                <Card
                  name={item.name}
                  date={item.date}
                  key={item.id}
                  id={item.id}
                  remove={removepeople}
                />
              );
            })}
          </div>
          <div className="my-10 flex justify-center items-center">
            <button className="btn" onClick={opendialog}>
              Add Person
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
