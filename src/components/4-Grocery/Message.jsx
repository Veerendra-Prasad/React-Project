import React, { useEffect } from "react";

function Message({msg , remove}) {

  useEffect(()=>{
    const timeout = setTimeout(() => {
      remove()
    }, 3000);

    return ()=> clearTimeout(timeout)
  },[])

  return (
    <div className="w-full p-3  flex justify-center items-center ">
      <div className="w-full sm:w-1/3 bg-slate-200 flex justify-center items-center p-3 rounded-md">
        <h1>{msg}</h1>
        <button className="ml-auto bg-sky-400 w-7 border-2 border-black rounded-md text-white">
          X
        </button>
      </div>
    </div>
  );
}

export default Message;
