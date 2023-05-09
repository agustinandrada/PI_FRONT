const axios = require("axios");
require("dotenv").config();
const { DB_APIKEY } = process.env;
const { Dog, Temperament } = require("../db");

const getDogById = async (id, fuente) => {
  const dog = fuente;

  if (fuente === "api") {
    const dogs = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${DB_APIKEY}`
      )
    ).data;
    const filtrado = dogs.filter((doge) => doge.id == id);
    if (filtrado.length === 0) {
      return statusCode(400);
    } else return filtrado;
  } else {
    const dogsBdd = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const dogs = dogsBdd.filter((doge) => doge.id == id);
    if (dogs.length === 0) {
      return statusCode(400);
    } else return dogs;
  }
};

module.exports = { getDogById };
