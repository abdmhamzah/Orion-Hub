const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.locals.formatDate  = require('./helpers/formatterDate') // UNTUK HELPERS
app.locals.isoDate  = require('./helpers/isoDate') // UNTUK HELPERS

app.use(route)

app.listen(port, () => console.log(`Listening on port ${port}!`))