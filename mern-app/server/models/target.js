const mongoose = require("mongoose");

const targetSchema = new mongoose.model(
  "Target",
  new mongoose.Schema({
    date: {
      type: Date,
      default: Date.now,
      required: true
    },
    trCases: Number,
    sspCases: Number,
    targets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
      }
    ]
  })
);

module.exports = targetSchema;