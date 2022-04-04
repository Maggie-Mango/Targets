const mongoose = require("mongoose");

const employeeModel = new mongoose.model(
  "Employee",
  new mongoose.Schema(
  {
    employee: String
  })
)

module.exports = employeeModel;