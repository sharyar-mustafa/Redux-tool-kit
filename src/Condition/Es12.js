import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
export default function Es12() {


   const [c, setc] = React.useState(0)
   const increment =()=>{setc(c+1)}
   const decrement =()=>{setc(c-1)}
   const reset =() =>{setc (0)}
  return (
      <>
    <div>Home</div>

    <h1>{c}</h1>
    
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset} >reset</button>


    </>
    
  )
}
