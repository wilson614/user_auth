const express = require('express')
const app = express()
const routes = require('./routes')

const port = 3000

app.use(routes)

require('./config/mongoose')

app.get('/', (req, res) => {
  res.send('Good!')
})

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
