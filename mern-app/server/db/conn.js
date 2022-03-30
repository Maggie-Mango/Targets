const mongoose = require('mongoose');
const mongoURI = process.env.ATLAS_URI;

const db = mongoose.connect(mongoURI, { useNewUrlParser: true })

db
  .then(db => console.log(`connected to the database succesfully!`))
  .catch(err => {
    console.log(`there was a problem connceting to the mongo db`)
    console.log(err)
  })

  module.export = db