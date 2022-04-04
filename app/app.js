const express = require('express');
const mongoose = require('mongoose');
const ticket = require('./model/schema');
const morgan = require('morgan');

const app = express();

//connecting to database
const tourl = "mongodb://localhost:27017/appointment";
mongoose.connect(tourl, { useNewUrlParser: true})
.then(() => console.log("connected to db")).catch(err => console.log(err));

//port address
app.listen(3000);

//using all files(static files)
app.use(express.static("styles"));

//used to get encoded input from client
app.use(express.urlencoded({extended:true}));

//middleware to show the statuscode and req type
app.use(morgan('dev'));

//setting view engine to run the view
app.set('view engine', 'ejs');
app.set('views', 'views');

//routing home page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

//appointment page setting
app.get('/appointment', (req, res) => {
    res.render('create');
    ticket.find().then().catch(err=>console.log(err));
});

//appointment booking
app.post('/appointment',(req,res)=>{
    const Ticket = new ticket(req.body);
    Ticket.save().then(()=>res.redirect('/appointment')).catch(err=>console.log(err));
});

//for page not found and wrong url
app.use((req, res) => {
    res.statusCode=404; 
    res.render('404page');
});