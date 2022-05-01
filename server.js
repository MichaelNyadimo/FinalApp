require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require("passport");

 
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to the Database'))

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    async(user) => {
        const userFound = await User.findOne({user})
        return userFound
    },
    async (id) => {
        const userFound = await User.FindOne({_id: id});
        return userFound;
    }
)

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.flash('Public'));

app.get('/login.js', (req, res) => {
    res.render('login');
});



app.use(express.json())

const finalrouter = require('./Public/routes/final')
app.use('/final', finalrouter)


app.listen(2000,() => console.log('Server has started'))
