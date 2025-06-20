import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [ value, setValue ] = useState(1);
  return (
    <>
    <div>Counter {value}</div>
    <button onClick={()=>setValue(value+1)}>+</button>
    </>
  )
}

export default Counter