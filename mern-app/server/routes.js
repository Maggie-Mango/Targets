const express = require("express");
const targetModel = require("./models");
const app = express();



app.get("/", async (request, response) => {
  const targets = await targetModel.find({});
  try {
    response.send(targets);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;