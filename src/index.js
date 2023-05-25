const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require('./mongodb');

app.use(express.json());
// mongo db code here
const templatePath = path.join(__dirname,'../templates');

app.set("view engine", "hbs");
app.set("views",templatePath);

app.get('/', (req, res) => {
    res.render("login")
})

app.get('/signup', (req, res) => {
    res.render("signup")
})

app.listen(3000 , () => {
    console.log('listening on port 3000');
});

app.post("/signup", async (req, res) => {
     const data = {
        name: req.body.name,
        email: req.body.password
     }

    await collection.insertMany({data});

    res.render("home")
})

