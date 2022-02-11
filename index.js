const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./src/routes/studentRoutes')
const app = express()

app.use(bodyParser.json({ limit: '15000000' }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Content-Security-Policy", "default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *")
    next();
  });

mongoose.connect("mongodb://127.0.0.1:27017/demo", {
  }).then(async () => {
    console.log("Mongoose: Successfully connected to the database");
  })
    .catch((err) => {
      console.log(
        "Mongoose: Could not connect to the database. Exiting now...",
        err
      );
      process.exit();
});

app.use('/student',routes)

app.get('/hello',(req, res)=>{
    res.status(200).json({success:true})
})

const server = app.listen('3000',()=>{
    console.log("App started at port 3000")
})