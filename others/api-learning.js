const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

// Server setup
app.listen(
    PORT,
    () => console.log(`Server is running on : http://localhost:${PORT}`)
)

// User facing endpoints
app.get('/home', (req, res) => {
    res
    .status(200)
    .send(
        'Welcome to the storefront!'
    )
})

app.get('/products', (req, res) => {
    res
    .status(200)
    .send(
        'This is the products page'
    )
})

app.get('useraccount', (req, res) => {
    res
    .status(200)
    .send(
        'This is the user account page'
    )
})

app.get('/cart', (req, res) => {
    res
    .status(200)
    .send(
        'This is the cart page'
    )
})

app.get('/payment', (req, res) => {
    res
    .status(200)
    .send(
        'This is the payment page'
    )
})

app.get('/orders', (req, res) => {
    res
    .status(200)
    .send(
        'This is the orders page'
    )
})

// Admin facing endpoints
app.get('/admin', (req, res) => {
    res
    .status(200)
    .send(
        'This is the admin page'
    )
})

app.get('/inventory', (req, res) => {
    res
    .status(200)
    .send(
        'This is the inventory page'
    )
})

app.get('/users', (req, res) => {
    res
    .status(200)
    .send(
        'This is the users page'
    )
})

// Error handling
app.get('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.post('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.put('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.delete('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.patch('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.options('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

app.all('*', (req, res) => {
    res
    .status(404)
    .send(
        'Page not found'
    )
})

// PUT methods for admin endpoints

