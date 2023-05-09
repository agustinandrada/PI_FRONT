const server = require("../src/app");
const request = require("supertest");

describe("Get Dogs", () => {
  it("Debe responder con un status 200 al hacer el metodo Get", async () => {
    const response = await request(server).get("/dogs");
    expect(response.statusCode).toEqual(200);
  });
});

describe("Get by ID", () => {
  it("Debe responder con un status 200 al hacer el metodo Get", async () => {
    const response = await request(server).get("/dogs/5");
    expect(response.statusCode).toEqual(200);
  });
});

describe("Get by ID", () => {
  it("Deberia responder con un status 400 si el ID es incorrecto", async () => {
    const response = await request(server).get(`/dogs/a`);
    expect(response.statusCode).toEqual(400);
  });
});

describe("Get Temperaments", () => {
  it("Debe responder con un status 200 al hacer el metodo Get", async () => {
    const response = await request(server).get("/temperaments");
    expect(response.statusCode).toEqual(200);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 201 si es creado con exito", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "Dog",
        image:
          "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "10",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(201);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si faltan datos", async () => {
    const res = await request(server).post("/dogs").send({
      name: "Dog",
      image: "",
      weight: "30 - 50",
      life_span: "10",
    });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si falta el nombre", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "",
        image:
          "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "10",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si falta la imagen", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "Dog",
        image: "",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "10",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si falta la altura", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "Dog",
        image:
          "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
        height: "",
        weight: "30 - 50",
        life_span: "10",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si falta el peso", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "Dog",
        image:
          "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
        height: "50 - 100",
        weight: "",
        life_span: "10",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si falta la esperanza de vida", async () => {
    const res = await request(server)
      .post("/dogs")
      .send({
        name: "Dog",
        image:
          "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
        height: "50 - 100",
        weight: "30 - 50",
        life_span: "",
        temperaments: [2, 3, 4],
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Post Dog", () => {
  it("Deberia responder con un status 400 si no se introdujo ningun temperamento", async () => {
    const res = await request(server).post("/dogs").send({
      name: "Dog",
      image:
        "https://www.nicepng.com/png/detail/1-15065_dog-vector-freeuse-library-dog.png",
      height: "50 - 100",
      weight: "30 - 50",
      life_span: "10",
      temperaments: [],
    });
    expect(res.statusCode).toEqual(400);
  });
});
