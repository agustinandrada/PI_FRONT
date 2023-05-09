import style from "./card.module.css"


const CardDetail = ({name, image, temperaments, temperament, weight, life_span, id }) => {

   
    if( typeof id === "number"){
        return(
                <div className={style.detail}>
                    <h2>{name}</h2>
                    <p><img className={style.imageDetail} src={image.url} alt={name} /></p>
                    <p>Temperaments: {temperament}</p>
                    <p>Weight range: {weight.metric} kg</p>
                    <p>Life span: {life_span} Years</p>
                    <h2>- {id} -</h2>
                </div>
            ) 
   }else{
        const final = temperaments.map(temp => temp.name).join(", ")
        return(
                <div className={style.detail}>
                    <p>{name}</p>
                    <p>
                        <img className={style.imageDetail} src={image} alt={name} />
                    </p>
                    <p>Temperaments: {final}</p>
                    <p>Weight range: {weight} kg</p>
                    <p>Life Span: {life_span} Years</p>
                    <h2> {id} </h2>
                </div> 
            )
    }   
}

export default CardDetail