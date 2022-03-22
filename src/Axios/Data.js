import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Data() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
        })
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }, [])

const arr = data.map((data, index) => {
    return (
        <div key={index}>
                {data.id}
                {data.title}
                {data.body}
        </div>
        
     
    )
}

)

return (
    <div>
        {arr}
    </div>
)
}