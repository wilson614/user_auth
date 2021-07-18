const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const routes = require('./routes')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(routes)

require('./config/mongoose')

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
