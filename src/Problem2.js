import {useState} from 'react'

const Problem2 =()=>{
    const [show,setshow] = useState(true)
    const handleClick = () =>{
        setshow(!show);
    }
    
    return (
        <>
        {show?<h1>Helloworld</h1>:""}
        <button onClick={handleClick}>Show/Hide</button>
        </>
    )
}

export default Problem2;