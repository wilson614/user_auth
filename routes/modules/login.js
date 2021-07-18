const express = require('express')
const router = express.Router()
const User = require('../../models/user')

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.find()
    .lean()
    .then(userList => {
      const user = userList.find((user) => user.email === email & user.password === password)
      res.render('login', { user })
    })
    .catch(error => console.log(error))
})

module.exports = router
