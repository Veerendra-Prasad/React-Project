import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray-700'>
      <div className='w-2/3 h-2/3  flex flex-col gap-4 justify-center items-center'>
        <h1 className='font-semibold text-xl'>Oops , The Page you are searching for does not exist</h1>
        <ul className='w-1/3 my-3 justify-start text-gray-300'>
          <li className='list-disc'>Check your url once again</li>
        </ul> 
        <Link to='/'><button className='w-36 my-5 rounded-md h-10 text-white bg-blue-600 border-2'>Back Home</button></Link>
      </div>
    </div>
  )
}

export default Error