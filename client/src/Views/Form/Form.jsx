import { useEffect, useState } from "react";
import style from "./Form.module.css"
import validation from "../validation";
import axios from "axios"
import { Link } from "react-router-dom";

const Form = ()=>{

    const [form, setForm] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperaments:"",
        image:""
    })

    const [weightH, setWeightH] = useState({
        min:"",
        max:""
    })

    const [heightH, setHeightH] = useState({
        min:"",
        max:""
    })

    const [errors, setErrors] = useState({
        name:"",
        weight:"",
        height:"",
        life_span:"",
        temperaments:"",
        image:""
    })


 const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
      
        validation({...form,[property]:value}, setErrors, errors)
        setForm({ ...form, [property]: value });
};
      
const weightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    validation({...form,[property]:value}, setErrors, errors)
    setWeightH({ ...weightH, [property]: value })
}

     
const heightHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    
    validation({...form,[property]:value}, setErrors, errors)
    setHeightH({ ...heightH, [property]: value });
};

const tempHHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    const sep = value.split(',');
    const final = sep.map(num => parseInt(num))

    validation({...form,[property]:final}, setErrors, errors)
    setForm({...form, [property]: final});
}

const handleSubmit = (event) => {
    if(form.name.length !== 0 &&
    form.weight.length !== 0 &&
    form.height.length !== 0 &&
    form.life_span.length !== 0 &&
    form.temperaments.length !== 0 &&
    form.image.length !== 0){
        event.preventDefault(); //! Asi no recarga la pag cuando tocamos enter
        axios.post("/dogs", form)
        .then(alert("Whof Whof"))
        .catch(err=>alert(err))}else{
            alert("Missing Data")
        };
};





useEffect(() => {
    const finalWeight = [weightH.min, "-", weightH.max].join(" ");
    setForm((prevForm) => ({ ...prevForm, weight: finalWeight }));
  }, [weightH]);

useEffect(() => {
    const finalHeight = [heightH.min, "-", heightH.max].join(" ");
    setForm((prevForm) => ({ ...prevForm, height: finalHeight }));
  }, [heightH]);
   



    return(
        <>
        <p className={style.ref1}></p>
        <p className={style.ref2}></p>
        <form className={style.form} onSubmit={handleSubmit}>
            <div>
                <label></label>
                <input 
                type="text"
                placeholder="Race" 
                value={form.name} 
                onChange={changeHandler} 
                name="name"
                className={style.input}>
                </input> 
                <span className={style.error}>{errors.name}</span>        
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Weight Min" 
                onChange={weightHandler}
                name="min"
                value={weightH.name}
                className={style.input}>
                </input> 
                <span className={style.error}>{errors.weight}</span>        
            </div>

            <div>
                <input 
                type="text" 
                placeholder="Weight Max"
                onChange={weightHandler}
                name="max"
                value={weightH.name}
                className={style.input}>
                </input>  
                <span className={style.error}>{errors.weight}</span>   
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Height Min"
                name="min" 
                onChange={heightHandler}
                value={heightH.value}
                className={style.input}>
                </input> 
                <span className={style.error}>{errors.height}</span>
            </div>
            
            <div>
                <input 
                type="text" 
                placeholder="Height Max"
                name="max" 
                onChange={heightHandler}
                value={heightH.value}
                className={style.input}>
                </input>   
                <span className={style.error}>{errors.height}</span>        
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Life expectancy" 
                value={form.life_span} 
                onChange={changeHandler} 
                name="life_span"
                className={style.input}>
                </input>
                <span className={style.error}>{errors.life_span}</span> 
            </div>

            <>-----------</>
            
            <div>
                <label></label>
                <input 
                type="text" 
                placeholder="Temperaments" 
                name="temperaments"
                onChange={tempHHandler}
                className={style.input}>
                </input>
                <span className={style.error}>{errors.temperaments}</span> 
                <p className={style.small}>Enter the ID of the temperaments with a space between each one.</p>         
            </div>

            <>-----------</>

            <div>
                <label></label>
                <input 
                type="text" 
                value={form.image}
                onChange={changeHandler}
                name="image"
                className={style.input}
                placeholder="Enter URL">
                </input> 
                <span className={style.error}> {errors.image}</span>      
            </div>

            <button type="submit" className={style.button}>Create</button>
        </form>

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
            <Link to='/about'>
                <button>About</button>
            </Link>

        </div>
        </>
    )
}

export default Form;






