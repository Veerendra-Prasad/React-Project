import React from 'react'

function Dice(props) {
    const styles = {
        backgroundColor : props.held ? "#59E391" : "#cbd5e1"
    }
  return (
    <div style={styles} className='flex justify-center items-center py-6 rounded-md text-xl font-semibold'  onClick={()=>(props.hold(props.id))} >
        {props.number}
    </div>
  )
}

export default Dice