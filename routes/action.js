const { Router } = require('express')
const express = require('express')
const route = express.Router()

const Action = require('../model/Action')

route.get('/', async (req, res) => {
  try {
    const actions = await Action.find()
    res.json(actions)
  } catch (error) {
    console.error(error.message)
    console.log('problem with get')
  }
})

route.post('/', async (req, res) => {
  const { nomAction, PA, date, status } = req.body
  try {
    // res.send('hello from post')
    const newaction = new Action({
      nomAction,
      PA,
      date,
      status,
    })
    const action = await newaction.save()
    res.json(action)
  } catch (error) {
    console.error(error.message)
    console.log('problem with post')
  }
})

module.exports = route
