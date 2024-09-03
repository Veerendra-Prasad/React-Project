import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Message from "./Message";

function Grocery() {
  const refNameContainer = useRef(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [show , setShow] = useState({showing : false , msg : ""})

  function closeoption() {
    setOpen(false);
  }

  function openoption() {
    setOpen(true);
  }

  function showAlert(showing=false,msg=""){
    setShow({showing,msg})
  }

  function additem() {
    const item = refNameContainer.current.value;
    if (item) {
      const newitem = {
        id: new Date().getTime().toString(),
        name: item,
      };
      setData((oldData) => {
        return [...oldData, newitem];
      });
      setOpen(false);
      showAlert(true,"Item Added");
    }
    refNameContainer.current.value = null;
  }

  function removeitem(id) {
    setData((oldData) => {
      return oldData.filter((item) => {
        return item.id !== id;
      });
    });
    showAlert(true , "Item Removed");
  }

  const styles = {
    display: open ? "flex" : "none",
  };

  return (
    <div className="w-full h-screen ">
      <div
        style={styles}
        className="w-full h-full absolute backdrop-blur-md flex justify-center items-center"
      >
        <div className="w-2/3 h-[40%] sm:h-1/3 sm:w-1/3 rounded-md p-3 bg-gray-100">
          <div className="w-full flex p-3 items-center">
            <h1 className="text-xl font-semibold">Add item</h1>
            <button
              className="ml-auto bg-sky-400 w-7 border-2 border-black rounded-md text-white"
              onClick={closeoption}
            >
              X
            </button>
          </div>
          <div className="p-5 flex items-center gap-5 sm:gap-10 flex-col sm:flex-row">
            <label htmlFor="enter" className="font-semibold">
              Enter the Item :
            </label>
            <input
              type="text"
              id="enter"
              className="p-1 rounded-md border-2 border-black"
              ref={refNameContainer}
            />
          </div>
          <div className="w-full flex justify-center items-center p-5 ">
            <button className="sm-btn" onClick={additem}>
              Add Item
            </button>
          </div>
        </div>
      </div>

      {show.showing && <Message {...show} remove={showAlert} />}

      <h1 className="text-xl font-semibold flex justify-center items-center p-10">
        Grocery List
      </h1>
      <div className="w-full flex justify-center items-center flex-col gap-10">
        <div className="w-2/3 sm:w-1/3 p-5 rounded-md bg-slate-300 flex justify-center items-center">
          <button className="btn" onClick={openoption}>
            Add Item
          </button>
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-2">
          {data.map((item) => {
            return (
              <Card
                name={item.name}
                remove={removeitem}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Grocery;
