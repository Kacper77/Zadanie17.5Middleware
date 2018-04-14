/*var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello world');
});

var server = app.listen(3000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});
*/

var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});


app.get('/', function(req, res) {
    console.log('Do trzech razy sztuka');
    res.send('Hello world!');
});

app.get('/store', function(req, res) {
    console.log('Do trzech razy sztuka')
    res.send('To jest sklep');
});

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});