const mongoose = require('mongoose')
const defURi = require('./default.json')

//connect to db

const connectDB = async () => {
  try {
    const db = await mongoose.connect(defURi.mogoUri)
    console.log('db is connect')
  } catch (error) {
    console.error(error.message)
    console.log('problem with mongoose connection')
  }
}

module.exports = connectDB
