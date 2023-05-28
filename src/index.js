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
  const username = req.body.name;
  const password = req.body.password;

  try {
    // Check if username or password already exists in the collection
    const existingUser = await collection.findOne({
      $or: [
        { name: username },
        { password: password }
      ]
    });

    if (existingUser) {
      // User or password already exists
      res.render("signup", { errorResponse: { message: 'Already used', count:3 } });
    } else {
      // Create a new user
      const data = {
        name: username,
        password: password
      };
      await collection.create(data);
      res.render("home");
    }
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
});

  let count =0;

  app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (check.password === req.body.password) {
      res.render("home");
    } else {
        res.render('login', { errorResponse: { message: 'Wrong password', count:2 } });
       
    }
  } catch (error) {
    res.render('login', { errorResponse: { message: 'Wrong details' ,  count:2 } });
    console.error(error);
    
    // Handle the error appropriately
  }
});

  
  
  
  

