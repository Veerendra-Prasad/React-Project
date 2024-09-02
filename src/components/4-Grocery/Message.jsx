import React from "react";

function Message(props) {
    
  return (
    <div className="w-full p-3  flex justify-center items-center bg-slate-400">
      <div className="w-1/3 bg-slate-700 flex justify-center items-center p-3 rounded-md">
        <h1>The Item is Added</h1>
        <button className="ml-auto bg-sky-400 w-7 border-2 border-black rounded-md text-white">
          X
        </button>
      </div>
    </div>
  );
}

export default Message;
