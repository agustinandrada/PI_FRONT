import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getFiltApi, getFiltBdd, getName,  getTemperaments, getTemp, getAllDogs} from "../../Redux/actions";
import style from "./Home.module.css"




const Home = ()=>{
  const dispatch = useDispatch();

  const [name, setName] = useState("")

  const[filtro, setFiltro] = useState("")

  const[orden, setOrden] = useState("")

  const[temperament, setTemperament] = useState("")

  const[pag, setPag] = useState(0)

  const paginas = useSelector(state=>state.paginas)


  const handleChange =(event) =>{
    setName(event.target.value)
  }
  
  const handleFilter =(event) =>{
    setFiltro(event.target.value)
  }

  const handleOrder =(event) =>{
    setOrden(event.target.value)
  }

  const handleTemp = (event)=>{
    setTemperament(event.target.value)
  }




  const onFilter = () => {
    if(filtro === "reset"){
      dispatch(getDogs(orden, pag))
    }if(filtro === "bdd"){
      dispatch(getFiltBdd(orden, 0))
    }if(filtro === "api"){
      dispatch(getFiltApi(orden, pag))
    }
  };


  const onSearchName =()=>{
    dispatch(getName(name))
  }

  const onSearchTemp =()=>{
    dispatch(getTemp(temperament, pag))
  }


  const handleKeyPress =(event)=>{
    if (event.key === "Enter" && event.target.value === name) {
      onSearchName();
    }if(event.key === "Enter" && event.target.value === temperament){
      onSearchTemp();
    }if(event.key === "Enter" && event.target.value === ""){
      dispatch(getDogs(orden, pag))
    }
  }
  
  const handlePag = (event) => {
 
  
    if (event.target.value === "next") {
      setPag(prevPag => {
        const newPag = prevPag + 1;
        return newPag;
      });
    }
    if (event.target.value === "prev" && pag !== 0) {
      setPag(prevPag => {
        const newPag = prevPag - 1;
        return newPag;
      })
    } if (event.target.value === "end") {
      setPag(prevPag => {
        const newPag = parseInt(paginas.length/8);
        return newPag;
      });
    } if (event.target.value === "first") {
      setPag(prevPag => {
        const newPag = 0;
        return newPag;
      });
    }     
  };
  
  const disableP = pag === 0;
  const disableN = pag === parseInt(paginas.length/8)
  

  useEffect(()=>{
      dispatch(getAllDogs());
      dispatch(getTemperaments());
      setFiltro('reset')
  },[])

    return(
        <>
        <div className={style.filters}>
            <div>
              <input className={style.input} type='search' value={name} onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Enter a Race" />
            </div>
            
            <div>
              <input className={style.input} type='search' value={temperament} onChange={handleTemp} onKeyPress={handleKeyPress} placeholder="Enter Temperaments" />
            </div>

            <div>
              <select  onChange={handleFilter} className={style.select}>
                <option value="reset">All Dogs</option>
                <option value="api">Api</option>
                <option value="bdd">Base de Datos</option>
              </select>
              <p onClick={onFilter()}/>
            </div>

            <div>
              <select  onChange={handleOrder} className={style.select}>
                <option value="normal">A-Z</option>
                <option value="inverso">Z-A</option>
                <option value="pesado">Heavier to Lighter</option>
                <option value="liviano">Lighter to Heavier</option>
              </select>
            </div>

            </div>
            <Cards/>

            <button className={style.button} value="first" onClick={handlePag} disabled={disableP}>First</button>
            <button className={style.button} value="prev" onClick={handlePag} disabled={disableP}>Prev</button>
            <button className={style.button} value="next" onClick={handlePag} disabled={disableN}>Next</button>
            <button className={style.button} value="end" onClick={handlePag} disabled={disableN}>Last</button>

           
        </>
    )
}

export default Home;