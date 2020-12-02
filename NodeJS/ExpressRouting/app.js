const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
    let animal = req.params.animal;
    let sound;

    if (animal == 'pig') sound = 'Oink';
    else if (animal == 'cow') sound = 'Moo';
    else if (animal == 'dog') sound = 'Woof Woof!';
    else res.redirect('/not_found');

    res.send('The '+ animal + ' says "'+ sound +'"');
});

app.get('/repeat/:message/:times', function(req, res) {
    let messageChanged = '';
    
    for (let index = 0; index < req.params.times; index++) {
        messageChanged += req.params.message + ' ';
    }

    res.send(messageChanged);
});

app.get('*', function(req, res) {
    res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, 'localhost', function() {
    console.log('Server is running...');
});