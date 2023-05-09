const axios = require("axios");
require("dotenv").config();
const { DB_APIKEY } = process.env;
const { Dog, Temperament } = require("../db");

const allDogs = async (name) => {
  if (name) {
    const dogs = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${DB_APIKEY}`
      )
    ).data;

    const dogsBdd = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    const filtrado = dogs.filter((doge) => doge.name === name);
    const filt = filtrado.map((dog) => ({
      id: dog.id,
      image: dog.image,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperaments: dog.temperament,
    }));

    const filtrado2 = dogsBdd.filter((doge) => doge.name === name);

    const final = filt.concat(filtrado2);

    return final;
  } else {
    const dogs = (
      await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${DB_APIKEY}`
      )
    ).data;
    const filt = dogs.map((dog) => ({
      id: dog.id,
      image: dog.image,
      name: dog.name,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperaments: dog.temperament,
    }));

    const dogsBdd = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const final = filt.concat(dogsBdd);

    return final;
  }
};

module.exports = { allDogs };
