import React from 'react'

function Card(props) {
  return (
    <div className='p-2 w-full h-[10%] bg-stone-300 rounded-md flex items-center'>
        <div className='flex flex-col justify-center items-start'>
            <h2 className='text-lg font-semibold'>{props.name}</h2>
            <p className='text-sm text-gray-700'>{props.date}</p>
        </div>
        <div className='ml-auto'>
            <button className='btn' onClick={()=>(props.remove(props.id))}>Remove</button>
        </div>
    </div>
  )
}

export default Card