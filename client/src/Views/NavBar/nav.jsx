import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = () =>{
    return(
        <div className={style.buttons}>
            <Link to='/home/0'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/'>
                <button>Landing</button>
            </Link>
            <Link to='/form'>
                <button>Create Dog</button>
            </Link>
        </div>
    )
}

export default Nav;