import React, { useState } from "react";

function Card(props) {
    const [check , setCheck] = useState(false);

    function handleChange(e){
        setCheck((oldCheck)=>{
            return !oldCheck
        })
    }

  return (
    <div className="w-full p-4 bg-slate-100 flex items-center rounded-md">
      <div className="flex gap-4 items-center">
        <input type="checkbox" id="item" className="w-4 h-4" onChange={(e)=>(handleChange(e))} />
        <label htmlFor="item">{check ? <s>{props.name}</s> : <h1>{props.name}</h1>}</label>
      </div>
      <button className="ml-auto sm-btn" onClick={()=>(props.remove(props.id))}>Remove</button>
    </div>
  );
}

export default Card;
