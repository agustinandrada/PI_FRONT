const { Router } = require("express");

const {
  getDogByIdHandler,
  getDogsHandler,
  postDog,
} = require("../Handlers/dogsHandlers");

const server = Router();

server.get("/", getDogsHandler);

server.get("/:id", getDogByIdHandler);

server.post("/", postDog);

module.exports = server;
