const { Dog } = require("../db");

const createDog = async ({
  image,
  name,
  height,
  weight,
  life_span,
  temperaments,
}) => {
  if (
    image.length != 0 &&
    name.length != 0 &&
    height.length != 0 &&
    weight.length != 0 &&
    life_span.length != 0 &&
    temperaments.length != 0
  ) {
    const newDog = await Dog.create({
      image,
      name,
      height,
      weight,
      life_span,
    });
    await newDog.addTemperaments(temperaments);
    return newDog;
  } else {
    return statusCode(400);
  }
};

module.exports = createDog;
