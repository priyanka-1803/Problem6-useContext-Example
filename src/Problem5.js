import {useState, useEffect} from 'react'

const Problem5 =()=>{
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(json =>setData(json))
    })
    console.log(data)
    return (
        <>
        <ul>
        {data.map((item,index)=>
        <li key ={index}>{item.title}</li>
        )}
        </ul>
        </>
    )
}

export default Problem5;