import {
  FILT_BDD,
  FILT_API,
  GET_DETAIL,
  GET_DOGS,
  GET_NAME,
  GET_ALL_TEMPERAMENTS,
  GET_TEMP,
  GET_ALL_DOGS,
} from "./types";

const initialState = { dogs: [], temperaments: [], paginas: [] };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TEMPERAMENTS:
      return { ...state, temperaments: payload };
    case GET_ALL_DOGS:
      return { ...state, dogs: payload, paginas: payload };
    case GET_DOGS:
      return { ...state, dogs: payload };
    case GET_TEMP:
      return { ...state, dogs: payload };
    case GET_DETAIL:
      return { ...state, dogs: payload };
    case FILT_BDD:
      return { ...state, dogs: payload };
    case FILT_API:
      return { ...state, dogs: payload };
    case GET_NAME:
      return { ...state, dogs: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
