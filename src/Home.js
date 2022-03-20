import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function Home() {


    const dispatch = useDispatch();
    

    const value = useSelector(state => state.custom.c);
    function increment(){
        dispatch({type:'increment'})
    }   
    function decrement(){
        dispatch({type:'decrement'})
    }
    function reset(){
        dispatch({type:'reset'})
    }
  return (
      <>
    

    <h1>{value}</h1>
    
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset} >reset</button>


    </>
    
  )
}
