const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({extname: '.hbs'})
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Exampnle app listening at http://localhost:${port}`)
})

