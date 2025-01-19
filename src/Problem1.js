import {useState} from 'react'

const Problem1 =()=>{
    const [show,setshow] = useState(true)
    const handleClick = () =>{
        setshow(!show);
    }
    console.log(show)
    return (
        <>
       {show?<h1>Helloworld</h1>:""}
        <button onClick={handleClick}>Show/Hide</button>
        </>
    )
}

export default Problem1;