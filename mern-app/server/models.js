const mongoose = require("mongoose");

//defining the collection
const targetSchema = new mongoose.Schema({
  employee: String,
  date: {
    type: Date,
    default: Date.now
  },
  trCases: Number,
  sspCases: Number,
  type1: Number,
  type2: Number,
  type3: Number,
  type4: Number
})

const Target = mongoose.model("Target", targetSchema);

module.exports = Target;
