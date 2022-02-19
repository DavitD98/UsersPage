import "./userProfile.css"
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getRequest} from "../../api/api";


const UserProfile = ()=>{
   const paramsValue = useParams()
    const navigate = useNavigate()
   const [userProfile,setUserProfile]= useState({})

   useEffect(()=>{
       getRequest(`https://jsonplaceholder.typicode.com/posts/${paramsValue.id}`,"GET")
           .then((response)=>{
               setUserProfile(response)
           })

   },[])


    const getProfileComment = ()=> {
       navigate(`/users/userComment/${paramsValue.id}`)
    }

    const getBack = ()=>{
       navigate(`/users`)
    }
      return (
       <div className="user-profile">
           <span>Users Profile</span>
           <p><span>User ID: </span>{userProfile.id}</p>
           <p><span>User Title: </span>{userProfile.title}</p>
           <button onClick={getProfileComment} className="btn">Get Profile Comment</button>
           <button onClick={getBack} className="btn"> Get Back</button>
       </div>
   )
}

export default UserProfile