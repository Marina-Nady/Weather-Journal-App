// Setup empty JS object to act as endpoint for all routes
 projectData = {};
// Require Express to run server and routes
var express = require('express')

// Start up an instance of app
var app = express();
//dependencies
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port,listening);
function listening(){
    console.log(`running on localhost : ${port}`);
}


//POST route setup

app.post('/sendData',  sendData);

function sendData(req,res){
    //console.log(req.body.data)
    newEntry = {
        temp: req.body.data.temp,
        date:req.body.data.date,
        feeling: req.body.data.feeling,
    }
   // console.log(newEntry)
projectData = (newEntry)
res.send(projectData)
} 

// GET route setup 
app.get('/getData',getInfo)

function getInfo( request,response ){
    response.send(projectData);
    console.log(projectData)
}
/*
app.post('/', function(req,res){
     projectData= req.body;
    console.log(projectData);
})*/

