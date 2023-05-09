const { Temperament } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { DB_APIKEY } = process.env;

const posTemp = async () => {
  const post = (
    await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${DB_APIKEY}`)
  ).data;
  const dog = await post.filter(
    (dog) => dog.temperament != null && dog.temperament != undefined
  );

  const temp = await dog.map((dog) => ({
    name: dog.temperament.split(", "),
  }));

  const uniqueTemperaments = {};
  const resultArr = [];

  temp.forEach((obj) => {
    obj.name.forEach((temp) => {
      if (!uniqueTemperaments[temp]) {
        uniqueTemperaments[temp] = true;
        resultArr.push({ name: temp });
      }
    });
  });

  const count = await Temperament.count();
  if (count === 0) {
    await Temperament.bulkCreate(resultArr);
    return resultArr;
  } else {
    const temps = await Temperament.findAll();
    return temps;
  }
};

module.exports = {
  posTemp,
};
