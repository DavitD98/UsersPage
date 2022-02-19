import {Link} from "react-router-dom"
import "./header.css"

const Header = ()=>{
    const links = [
        {
            id:1,
            link:"/users",
            text:"USERS"
        },
        {
            id:2,
            link:"/home",
            text:"HOME"
        }
    ]

    return(
        <header>
            <nav>
                {
                    links.map(item => {
                        return(
                            <li key={item.id}><Link to={item.link}>{item.text}</Link></li>
                        )
                    })
                }
            </nav>
        </header>
    )
}

export default Header