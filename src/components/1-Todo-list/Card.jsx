import React from 'react'

function Card(props) {
  return (
    <div className='sm:w-1/3 w-2/3 bg-slate-500 rounded-md p-4 flex justify-around items-center text-white '>
      <h5 className='w-2/3 overflow-hidden'>{props.task}</h5>
      <button className='bg-slate-700 w-20 rounded-md p-1 ml-auto' onClick={()=>(props.remove(props.id))}>Remove</button>
    </div>
  )
}

export default Card