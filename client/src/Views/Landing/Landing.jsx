import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = ()=>{
    return(
        <>
        <Link to='/home/1'>
        <button className={style.button}></button>
        </Link>
        </>
    )
}

export default Landing;