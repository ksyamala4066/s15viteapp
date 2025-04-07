import React, { useState } from 'react'//rafc
import Button from '@mui/material/Button';


export const Funcounter = () => {
    const[count,setCount]=useState(0)
    function increment(){
        setCount(
            count+1
        )
    }
    function decrement(){
        setCount(
            count-1
        )
    }
  return (
    <div>
        <h1>count: {count}</h1>
        <Button variant="outlined"onClick={()=> increment()}>increment</Button>
        <Button variant="outlined"onClick={()=> decrement()}>decrement</Button>
        {/* <Button variant="outlined">Primary</Button> */}
    </div>
  )
}

export default Funcounter
