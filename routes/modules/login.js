const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.find()
    .lean()
    .then(userList => {
      const user = userList.find((user) => user.email === email & user.password === password)
      res.render('welcome', { user })
      if (user) {
        res.cookie('email', email)
        res.cookie('password', password)
      }
    })
    .catch(error => console.log(error))
})

router.get('/', (req, res) => {
  const { email, password } = req.cookies
  User.find()
    .lean()
    .then(userList => {
      const user = userList.find((user) => user.email === email & user.password === password)
      if (user) {
        res.render('welcome', { user })
      }
      res.render('index')
    })
    .catch(error => console.log(error))
})

module.exports = router
