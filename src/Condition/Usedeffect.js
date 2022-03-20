import React ,{useEffect,useState} from 'react'

export default function Usedeffect() {
    const [num, setnum] = useState(0)
    const increment =()=>{setnum(num+1)}
    const decrement =()=>{setnum(num-1)}

    useEffect(()=>{
        alert("useEffect")
    }
    ,[])
  return (
    <div>Usedeffect

  <h1>{num}</h1>
    <button onClick={increment} >+</button>
    <button onClick={decrement} >-</button>

    </div>
  )
}
