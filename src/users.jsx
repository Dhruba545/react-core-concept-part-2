// import { useEffect } from "react";

import { useEffect, useState } from "react"

export default function Users(){
    // const [users , setUsers] = useState([]);
    const [users ,setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => console.log(data))
        
    } ,[])
 
    // useEffect(() =>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // } , [])

    return(
        <div>
             <h3>Users:{users.length} </h3>
             <h1>Bujhte partecina  kicu je ki hocce </h1>
        </div>
    )
}

