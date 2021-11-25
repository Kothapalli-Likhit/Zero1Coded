// to use express framework
const express = require('express');
const app = express();

// port name 
const port = 8080;


//file read and write libraries
const path = require('path');
const fs= require('fs');

// body parser libraries
const bodyparser = require('body-parser');


app.use(express.urlencoded());
// the above thing is very important so that the data is shown in the database or in the compass of mongoose



// PUG specific stuff 
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// serving the static files in the websites 
app.use('/static', express.static('static'))

// for home page 
app.get('/',(req,res)=>{
    res.render('Home.pug');
})

// for Achievements
app.get('/achievement',(req,res)=>{
    res.render('achievement.pug');
})

// for resources
app.get('/Resources',(req,res)=>{
    res.render('Resources.pug');
})

//our team
app.get('/Our_Team',(req,res)=>{
    res.render('Our_Team.pug');
})

// rules and regulation 
app.get('/rules_And_Regulation',(req,res)=>{
    res.render('rules_And_Regulation.pug')
})


// for  contact page
app.get('/Contact_Us',(req,res)=>{
    res.render('Contact_Us.pug');
}) 


// Starting  the server 
app.listen(port,()=>{
    console.log(`The application started successfuly ${port}`)
})

