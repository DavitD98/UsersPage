import "./usersPage.css"
import {useEffect, useState} from "react";
import {getRequest} from "../../api/api";
import UsersPageComponent from "../components/usersPageComponent/usersPageComponent";

const UsersPage = () =>{
    const [users,setUsers] = useState([])

     useEffect(()=>{
         getRequest("https://jsonplaceholder.typicode.com/users","GET")
             .then((response)=>{
                 setUsers(response)
             })

         return ()=>{
             setUsers([])
         }
     },[])

    return(
        <div className="container">
            <h1>Users Page</h1>
        <div className="users">
            {
               users.map(item => {
                   return(
                       <UsersPageComponent {...item} key={item.id}/>
                   )
               })
            }
        </div>
        </div>
    )
}

export default UsersPage