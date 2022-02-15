const express = require('express')

const app = express()

const port = process.env.PORT || 3000

///CRUD operations
//Create --> post
//read --> get
//update -->patch
//delete -->delete
//webpages--> name
//domainName--> www.example.com
//www.example.com/webpagename

// auto refresh  nodemon src/app.js -e js,hbs
// Static files

const path = require('path')

// console.log(path.join(__dirname, '../'))
// console.log(path.join(__dirname, '../public'))
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.get('/help', (req, res) => {
//     res.send('Help Page')
// })
// app.get('/weather', (req, res) => {
//     res.send({
//         location: 'egypt',
//         forecast: 29
//     })
// })
// app.get('/about', (req, res) => {
//     res.send('Help Page')
// })


//////// html engine hbs
app.set('view engine', 'hbs')
const viewPath = path.join(__dirname, '../templates/views')
app.set('views', viewPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        name: 'Osama'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Sabry',
        msg: 'Help please'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about page',
        name: 'Osaahmedma',
        msg: 'picture',
        img: 'images/1.jpg'
    })
})

///request part
//http://localhost:3000/products?search=games&rate=5
app.get('/products', (req, res) => {
    console.log(req.query)
    console.log(req.query.search)
    res.send({
        products: [{}]
    })
})

app.get('/weather', (req, res) => {

    if (req.query.address) {
        res.send({
            location: req.query.address,
            weather: 'It is raninig'
        })
    } else {
        res.send('Please enter valid address')
    }
})




// 404 page
app.get('*', (req, res) => {
    res.render('404page', {
        title: 'Error'
    })
})


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})