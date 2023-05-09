import { useEffect } from "react";
import CardsDetail from "../../Components/Cards/CardsDetail";
import { useDispatch } from "react-redux";
import { getDetail } from "../../Redux/actions";
import { useParams } from "react-router-dom";

const Detail = ()=>{

    const {id} = useParams()

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getDetail(id))
    },[dispatch, id])
    return(
        <div>    
        <CardsDetail/>
      </div>
    )
}

export default Detail;