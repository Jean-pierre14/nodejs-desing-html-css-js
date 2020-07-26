const express = require('express')
const ejs = require('ejs')
const expLayouts = require('express-ejs-layouts')
const { success, error } = require('consola')
const app = express()

// Static files
app.use(express.static('public'))
// Engine Template
app.set('view engine', 'ejs')

// get index page
app.get('/', (req, res) => {
    res.render('index', { title: 'Eddy PLK' })
})
app.get('/videos', (req, res) => {
    res.render('videos', { title: 'Eddy PLK' })
})

const PORT = 7000

app.listen(PORT, (err) => {
    if (err) throw err
    success({ message: `Server run on port : ${PORT}`, badge: true })
})