const mongoose = require("mongoose");

const employeeModel = new mongoose.model(
  "Employee",
  new mongoose.Schema(
  {
    employee: String
  },
    {
      date: {
        type: Date,
        default: Date.now,
        required: true
      },
      trCases: Number,
      sspCases: Number,
      type1: Number,
      type2: Number
    }
  )
)

module.exports = employeeModel;