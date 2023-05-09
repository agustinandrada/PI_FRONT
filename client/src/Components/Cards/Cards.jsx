import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from "./Cards.module.css"

const Cards = () => {

  const dogs = useSelector(state=>state.dogs)


   return (
    <div className={style.cards}>
      {dogs.map(({image, name, weight, life_span, id, temperaments})=>{
        return (
        <Card
        key={id}
        image={image}
        name={name}
        weight={weight}
        life_span={life_span}
        id={id}
        temperaments={temperaments}
        />)
      })}        
    </div>
)}


export default Cards;