// load the things we need
var express = require('express');
var app = express();
port = 90

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// docs page
app.get('/docs', function(req, res) {
    res.render('pages/docs');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// shop page
app.get('/shop', function(req, res) {
    res.render('pages/shop');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`)
})