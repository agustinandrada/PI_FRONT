import style from "./About.module.css"
import { Link } from "react-router-dom";

const About= ()=>{
    return(
        <div className={style.ref3}>
        
        <p className={style.ref2}/>
        
        <a href='https://www.linkedin.com/in/agustin-andrada-928a87127/' target="_blank">
        <p className={style.ref1}/>
        </a>

        <div className={style.buttons}>
        <Link to='/home/1'>
                <button>Home</button>
            </Link>
            <Link to='/'>
                <button>Landing</button>
            </Link>
            <Link to='/form'>
                <button>New Dog</button>
            </Link>

        </div>

        </div>
    )
}

export default About;