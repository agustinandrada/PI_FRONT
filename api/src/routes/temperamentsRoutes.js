const { Router } = require("express");
const getTemperaments = require("../Handlers/temperamentsHandler");

const server = Router();

server.get("/", getTemperaments);

module.exports = server;
