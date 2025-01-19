

const Problem1 =()=>{
    const myArray = [
        {id:"1", name:'Priyanka'},
        {id:'2', name:'Pallavi'},
        {id:'3', name:'Anushka'}
    ]
   
    return (
    <>
    <ul>
        {myArray.map((user, index) =>{
            <li key={index}>{user.name}</li>
        })}
    </ul>        
    </>
    )
}

export default Problem1;