import style from "./card.module.css"
import { Link } from "react-router-dom"

const Card = ({name, image, temperaments, weight, id }) => {
    if(typeof id === "number" ){
    return(
    <Link style={{ textDecoration: "none", cursor:'default' }} to={`/detail/${id}`}>
        <p className={style.title}>{name}</p>
        <div className={style.card}>
            <p>
                <img className={style.image} src={image.url} alt={name} />
            </p>
            <p>Temperaments: {temperaments}</p>
            <p>Weight range: {weight.metric} kg</p>
        </div> 
    </Link>
    ) }else{
        const tempe = temperaments.map((temp)=> temp.name)
        const final = tempe.join(", ")
        return(
            <Link style={{ textDecoration: "none" }} to={`/detail/${id}`}>
                <p className={style.title}>{name}</p>
                <div className={style.card}>
                    <p>
                        <img className={style.image} src={image} alt={name} />
                    </p>
                    <p>Temperaments: {final}</p>
                    <p>Weight range: {weight} kg</p>
                </div> 
            </Link>
            )
    }
}

export default Card