
import "./home.css"
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
    let date = new Date()
    return (
        <div className="home">
       <h1>Welcome to Our Page</h1>
            <p>{date.getHours()} : {date.getMinutes()}</p>
        </div>
    )
}
export default Home
