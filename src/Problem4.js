import {useState} from 'react'

const Problem4 =()=>{
    
    const [value, setValue] = useState(0)

    const handleAdd = () =>{
        setValue(value+1)
    }

    const handleSub = () =>{
        setValue(value-1)
    }
    
    return (
        <>
        <button onClick={handleAdd}>ADD</button>
        {value}
        <button onClick={handleSub}>SUBTRACT</button>
        </>
    )
}

export default Problem4;