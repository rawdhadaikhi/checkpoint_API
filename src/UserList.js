import React,{useState,useEffect} from 'react'
import axios from 'axios';

function UserList() {
     
    const [listOfUser, setListOfUser] = useState([]);

    useEffect (() =>{
      
            axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then (res =>{
                setListOfUser(res.data)
            })
            .catch( err =>{
                console.log(err)
            } )

        } ,[]);

    
    

    return (
        <div>
            <h2 className="title-list">List of Users</h2>
           
             {listOfUser.map(user => (
                 <div>
                   <ul className="list">
                         <li>{user.name}</li>
                  </ul>
                 </div>
             ))}
                 
        </div>
    )
}

export default UserList
