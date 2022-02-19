import './userComment.css'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {getRequest} from "../../api/api";


const UserComment = ()=>{
    //       Navigate & Params
    const navigate = useNavigate()
    const paramsValue = useParams()

    //       States
    const [comment,setComment]= useState("")
    const [userComment,setUserComment] = useState([])

    //        UseEffect()
    useEffect(()=>{
        getRequest(`https://jsonplaceholder.typicode.com/posts/${paramsValue.id}/comments`,"GET")
            .then((response)=>{
                setUserComment(response)
            })

        return ()=>{
            setComment('')
            setUserComment([])
        }
    },[paramsValue.id])



    //       Functions
    const changeCommentValue = (e)=>{
        setComment(e.target.value)
    }

    const addComment = ()=>{
        const newComment = {
            body:comment
        }
        getRequest(`https://jsonplaceholder.typicode.com/posts/${paramsValue.id}/comments`,"post",newComment)
        setUserComment(prevState => {
            return [...prevState,newComment]
        })
    }

    const getBack = ()=>{
        navigate(`/users/userProfile/${paramsValue.id}`)
    }


    return (
        <div className="user-comment">
            <h2>User Comments</h2>
            {
                userComment.map(item =>{
                    return(
                        <div key={item.id}>
                            <h4>User Comment</h4>
                        <p>{item.body}</p>
                        </div>
                    )
                })
            }
            <input onChange={changeCommentValue} type="text"/>
            <button onClick={addComment} className="btn">Add Comment</button>
            <button onClick={getBack} className="btn">Get Back</button>
        </div>
    )

}
export default UserComment