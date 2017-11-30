const express = require('express');
    app = express();
    bodyParser = require('body-parser');
    mongoose = require('mongoose');
    Schema = mongoose.Schema;
    faker = require('faker');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect('mongodb://localhost/users/db/')

mongoose.Promise = global.Promise;

//DATABASE
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => {
    console.log("Connected to db at /users/db/")
})

app.get("/users", (req, res) => {
    User.find({})
        .then(users => {
            res.json(users)
        })
})

app.get("/users/:id", (req, res) => {
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(users => {
            res.json(users)
        })
})

app.post('/login', (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).then((user) => {
        if (user.password === req.body.password) {
            res.json({
                authenticated: true,
                id: user.id
            })
        } else {
            res.json({
                authenticated: false,
                id: null
            })
        }
        //next();
    })
})

app.post('/signup', (req, res) => {
    new User({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        title: req.body.title,
        genre: req.body.genre,
        picture: req.body.picture,
        location: req.body.location,
        email: req.body.email,
        bio: req.body.bio,
        media: req.body.media
    }).save()
    .then((newUser) => {
        console.log(newUser)
        res.json(newUser)
    })
})


//SCHEMA
let userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    title: String,
    genre: String,
    picture: String,
    location: String,
    email: String,
    bio: String,
    media: String
})

let User = mongoose.model("User", userSchema)

//MONGOOSE
let newUser = User({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
    genre: "",
    picture: faker.image.avatar(),
    location: faker.address.city(),
    email: faker.internet.email(),
    bio: faker.lorem.sentences(),
    media: ""
})

newUser.save()
.then(User => {
    console.log("New User Created")
})
.catch(err => {
    console.log(err)
})

app.listen(8000);