import axios from "axios";
import {
  GET_DOGS,
  GET_DETAIL,
  FILT_BDD,
  FILT_API,
  GET_NAME,
  GET_ALL_TEMPERAMENTS,
  GET_TEMP,
  GET_ALL_DOGS,
} from "./types";

//! GET TEMPERAMENTS

export const getTemperaments = () => {
  return async function (dispatch) {
    const data = await axios.get("/temperaments");
    const temperaments = data.data;
    dispatch({ type: GET_ALL_TEMPERAMENTS, payload: temperaments });
  };
};

//! GET ALL DOGS

export const getAllDogs = () => {
  return async function (dispatch) {
    const data = await axios.get("/dogs");
    const dogs = data.data;

    dispatch({ type: GET_ALL_DOGS, payload: dogs });
  };
};

//! GET DOGS

export const getDogs = (orden, pag) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get("/dogs");
      const dogs = data.data;
      const orden = dogs.sort((a, b) => a.name.localeCompare(b.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = orden.slice(start, last);

      dispatch({ type: GET_DOGS, payload: result });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get("/dogs");
      const dogs = data.data;
      const orden = dogs.sort((a, b) => b.name.localeCompare(a.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = orden.slice(start, last);

      dispatch({ type: GET_DOGS, payload: result });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get("/dogs");
      const dogs = data.data;
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: "GET_DOGS", payload: result });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get("/dogs");
      const dogs = data.data;
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: "GET_DOGS", payload: result });
    };
  }
};

//*----------------------------------------------------------------------------
//!GET DETAIL

export const getDetail = (id) => {
  return async function (dispatch) {
    const data = await axios.get(`/dogs/${id}`);
    const dogs = data.data;
    dispatch({ type: GET_DETAIL, payload: dogs });
  };
};

//*---------------------------------------------------------------------------
//!FILTRADO POR BASE DE DATOS

export const getFiltBdd = (orden, pag) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const dogs = data.data;
      const final = dogs
        .filter((dog) => typeof dog.id === "string")
        .sort((a, b) => a.name.localeCompare(b.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const dogs = data.data;
      const final = dogs
        .filter((dog) => typeof dog.id === "string")
        .sort((a, b) => b.name.localeCompare(a.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "string");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "string");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
};

//*---------------------------------------------------------------------------------------
//!FILTRADO POR API

export const getFiltApi = (orden, pag) => {
  if (!orden || orden === "normal") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const dogs = data.data;
      const final = await dogs
        .filter((dog) => typeof dog.id === "number")
        .sort((a, b) => a.name.localeCompare(b.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_API, payload: result });
    };
  }
  if (orden === "inverso") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const dogs = data.data;
      const final = await dogs
        .filter((dog) => typeof dog.id === "number")
        .sort((a, b) => b.name.localeCompare(a.name));

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_API, payload: result });
    };
  }
  if (orden === "liviano") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "number");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return aWeight - bWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
  if (orden === "pesado") {
    return async function (dispatch) {
      const data = await axios.get(`/dogs`);
      const datas = data.data;
      const dogs = datas.filter((dog) => typeof dog.id === "number");
      let final;

      final = dogs.sort((a, b) => {
        const aWeight =
          typeof a.weight === "string"
            ? parseInt(a.weight.split(" - ")[1])
            : parseInt(a.weight.metric.split(" - ")[1]);

        const bWeight =
          typeof b.weight === "string"
            ? parseInt(b.weight.split(" - ")[1])
            : parseInt(b.weight.metric.split(" - ")[1]);

        return bWeight - aWeight;
      });

      let start = 8 * pag;
      let last = start + 8;

      const result = final.slice(start, last);

      dispatch({ type: FILT_BDD, payload: result });
    };
  }
};

//*-------------------------------------------------------------------------------------------
//! BUSCAR NOMBRE

export const getName = (name) => {
  return async function (dispatch) {
    const data = await axios.get(`/dogs`);
    const dogs = data.data;
    const nombre = name.toLowerCase();
    const final = await dogs.filter((dog) =>
      dog.name.toLowerCase().includes(nombre)
    );
    dispatch({ type: GET_NAME, payload: final });
  };
};

//*-------------------------------------------------------------------------------------------
//! BUSCAR POR TEMPERAMENTOS

export const getTemp = (temperament, pag) => {
  return async function (dispatch) {
    const data = await axios.get(`/dogs`);
    const dogs = data.data;

    const temps = [];
    temps.push(temperament);

    const temp = temps
      .flatMap((t) => t.toLowerCase().split(/\s*,\s*|\s+/))
      .sort();

    const final = dogs.filter((dog) => {
      if (typeof dog.id === "number" && dog.temperaments) {
        console.log(dog);
        const comp = dog.temperaments.toLowerCase().split(", ").sort();
        let contador = 0;

        if (comp.length === 0) {
          return false;
        }

        for (let i = 0; i < temp.length; i++) {
          if (comp.includes(temp[i])) {
            contador++;
          }
        }
        return contador === temp.length;
      } else {
        if (dog.temperaments) {
          const allT = dog.temperaments;
          const comp = allT.map((t) => t.name.toLowerCase()).sort();
          let contador = 0;

          if (comp.length === 0) {
            return false;
          }

          for (let i = 0; i < temp.length; i++) {
            if (comp.includes(temp[i])) {
              contador++;
            }
          }
          return contador === temp.length;
        }
      }
      return false;
    });

    let start = 8 * pag;
    let last = start + 8;

    const result = final.slice(start, last);

    dispatch({ type: GET_TEMP, payload: result });
  };
};
