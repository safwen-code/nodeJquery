const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const port = process.env.PORT || 5000
var $ = require('jquery')

const connectDB = require('./config/connectDB')
const action = require('./routes/action')

//apply the middelware
app.use(express.json({ extended: false }))

//set template engine
app.set('view engine', 'ejs')

//set the path of the jquery file to be used from the node_module jquery package
app.use(
  '/jquery',
  express.static(path.join(__dirname + '/node_modules/jquery/dist/')),
)

//set static folder(public) path
app.use(express.static(path.join(__dirname + '/public')))

//default
app.get('/', (req, res) => {
  res.render('form')
})

app.use('/action', action)

connectDB()
app.listen(port, () => {
  console.log(`server is work in port ${port}`)
})
