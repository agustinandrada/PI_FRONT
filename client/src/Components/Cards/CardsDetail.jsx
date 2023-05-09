import { useSelector } from 'react-redux';
import style from "./Cards.module.css"
import CardDetail from '../Card/CardDetail';

const CardsDetail = () => {

  const dogs = useSelector(state=>state.dogs)

   return (
    <div className={style.detail}>
      {dogs.map(({image, name, temperaments,temperament, weight, life_span, id})=>{
        return (
        <CardDetail
        image={image}
        name={name}
        temperament={temperament}
        temperaments={temperaments}
        weight={weight}
        life_span={life_span}
        id={id}
        key={id}
        />)
      })}        
    </div>
)}


export default CardsDetail;