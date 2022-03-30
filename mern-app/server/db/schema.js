const mongoose = require('mongoose')

const targetSchema = new moongoose.Schema({
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

const target = mongoose.model('targets', targetSchema)

module.export = target