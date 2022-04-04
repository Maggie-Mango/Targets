const express = require("express");
const Target = require("./models/target");
const Employee = require("./models/employee")
const app = express();

//creates new value in Employee collection
app.post("/add-employee", async (req, res) => {
  const employee = new Employee({
    employee: req.body.employee
  })
  try {
    employee.save()
    res.status(201).send(blog)
  } catch (error) {
    res.status(500).send(error)
  }
});

//creates new value in Target collection with TR and SSP total
app.post("/add-date", async (request, response) => {

});

//adds employee specific information based on date
app.post("/employee-targets", async (request, response) => {

})

app.get("/", async (request, response) => {
  const targets = await targetModel.find({});
  try {
    response.send(targets);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;