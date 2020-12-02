const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const User = require('./models/user');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

//* App setup

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
app.use(require('express-session')({
    secret: 'Doge is the best meme',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//* Database setup

const dbUrl = 'mongodb://localhost/auth_demo';
const dbOptions = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};
mongoose.connect(dbUrl, dbOptions).then(() => console.log('Connected to database...'));

//* ROUTES

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/secret');
        });
    });
});

app.get('/secret', isLoggedIn, (req, res) => {
    res.render('secret');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate('local', {
        successRedirect: '/secret',
        failureRedirect: '/login'
    }), (req, res) => {
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.listen(app.get('port'), process.env.IP, () => console.log(`Server running in port ${app.get('port')}`));
