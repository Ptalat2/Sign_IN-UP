const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require('./mongodb');
const templatePath = path.join(__dirname,'../templates');
const publicPath = path.join(__dirname, '../public');

app.use(express.json());
// mongo db code here

// app.use(express.static(path.join(__dirname, '../public')));

app.set("view engine", "hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));


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
      password: req.body.password
    };
  
    try {
      await collection.create(data);
      res.render("home");
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  });

  app.post("/login", async (req, res) => {
   
   
    try {
        const check = await collection.findOne ({name:req.body.name})     
        if(check.password === req.body.password) {
            res.render("home");
        } else {
            res.send("wrong password")
        }
        
    } catch (error) {
        res.send("wrong details")
        console.error(error);
      // Handle the error appropriately
    }
  });

