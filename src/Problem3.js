import {useState} from 'react'

const Problem3 =()=>{
    const [count, setCount] = useState(0)
    const handleCount = () =>{
        setCount(count+1);
    }
    
    return (
        <>
        <button onClick={handleCount}>Counter:{count}</button>
        </>
    )
}

export default Problem3;