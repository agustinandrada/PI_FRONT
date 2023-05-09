const { conn } = require("../src/db.js");
const { Dog, Temperament } = require("../src/db.js");

describe("Models", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  test("Debe tener las propiedades correctas", async () => {
    const dog = await Dog.build({
      name: "Auri",
      image: "algo.png",
      height: "50 - 100",
      weight: "30 - 50",
      life_span: "10",
    });
    const keys = ["id", "name", "image", "height", "weight", "life_span"];
    expect(Object.keys(dog.toJSON())).toEqual(keys);
  });

  test("La propiedad name no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Dog.create({
        image: "algo.png",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "10",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("La propiedad image no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Dog.create({
        name: "dog",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "10",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("La propiedad height no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Dog.create({
        name: "dog",
        iamge: "algo.jpg",
        weight: "30 - 50",
        life_span: "10",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("La propiedad weight no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Dog.create({
        name: "dog",
        iamge: "algo.jpg",
        height: "30 - 50",
        life_span: "10",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("La propiedad life span no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Dog.create({
        name: "dog",
        iamge: "algo.jpg",
        weight: "30 - 50",
        height: "30 - 50",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("Debe tener las propiedades correctas", async () => {
    const temperaments = await Temperament.build({
      name: "Happy",
      id: 1,
    });
    const keys = ["name", "id"];
    expect(Object.keys(temperaments.toJSON())).toEqual(keys);
  });

  test("La propiedad name no puede ser null", async () => {
    expect.assertions(1);
    try {
      await Temperament.create({
        id: 1,
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  test("La propiedad id no puede ser null", async () => {
    expect.assertions(0);
    try {
      await Temperament.create({
        name: "Happy",
      });
    } catch (error) {
      expect(error.message).toBeDefined();
    }
  });

  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  });
});
