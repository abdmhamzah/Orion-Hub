const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

// app.locals.ageReleased = require('./helpers/ageReleased').ageReleased // UNTUK HELPERS

app.use(route)

app.listen(port, () => console.log(`Listening on port ${port}!`))