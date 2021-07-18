const express = require('express')
const app = express()
const routes = require('./routes')
const exphbs = require('express-handlebars')

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(routes)

require('./config/mongoose')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
