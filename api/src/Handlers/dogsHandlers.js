const createDog = require("../Controllers/postDogs.control");
const { getDogById } = require("../Controllers/getDogById");
const { allDogs } = require("../Controllers/getAllDogs");

const getDogsHandler = async (req, res) => {
  const { name } = req.query;
  const dogs = await allDogs(name);
  try {
    res.status(200).json(dogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDogByIdHandler = async (req, res) => {
  const { id } = req.params;

  const fuente = isNaN(id) ? "bdd" : "api";

  try {
    const dogId = await getDogById(id, fuente);
    res.status(200).json(dogId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDog = async (req, res) => {
  const { image, name, height, weight, life_span, temperaments } = req.body;
  try {
    const newDog = await createDog({
      image,
      name,
      height,
      weight,
      life_span,
      temperaments,
    });
    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogByIdHandler,
  getDogsHandler,
  postDog,
};
