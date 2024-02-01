const express = require('express');
const path = require('path');
const app = express();

app.set('views', './pug/views');

app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {
    console.log("express server çalıştı.");
});