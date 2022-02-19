import {useNavigate} from "react-router";
import "./usersPageComponent.css"

const UsersPageComponent = (props)=>{
    const navigate = useNavigate()
    const {id,name,email,address} = props
    const getProfile = ()=>{
        navigate(`/users/userProfile/${id}`)
    }

    return (
        <div className="user-item">
            <p><span>Name :</span>{name}</p>
            <p><span>Email :</span>{email}</p>
            <p><span>Address :</span>{address.street},{address.city}</p>
            <button onClick={getProfile} className="btn">Get Profile</button>
        </div>
    )

}

export default UsersPageComponent