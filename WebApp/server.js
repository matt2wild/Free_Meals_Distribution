const express = require('express'), app=express();
const config = require('config');
let http = require('http');
let fs = require('fs');
let bodyParser = require('body-parser');

//Mongo DB
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mattwild:<password>@cluster0.emlwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
app.use(bodyParser.json())
app.post('/', function(req, res) {
    // Insert JSON straight into MongoDB
   db.collection('employees').insert(req.body, function (err, result) {
       if (err)
          res.send('Error ');
       else
         res.send('Success');
 
   });
 });

//Routing
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if(request.url.indexOf('.html') != -1){
        if(request.url.indexOf('index.html') != -1){
            fs.readFile('./index.html', null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.write(data);
                }
                response.end();
            });
        }
        if(request.url.indexOf('orderTerminal.html') != -1){
            fs.readFile('./orderTerminal.html', null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.write(data);
                }
                response.end();
            });
        }
        if(request.url.indexOf('packingTerminal.html') != -1){
            fs.readFile('./packingTerminal.html', null, function (error, data) {
                if (error) {
                    response.writeHead(404);
                    respone.write('Whoops! File not found!');
                } else {
                    response.write(data);
                }
                response.end();
            });
        }
    }
    if(request.url.indexOf('.js') != -1){
        if(request.url.indexOf('orderTerminal.js') != -1){
            fs.readFile('./public/js/orderTerminal.js', function (err, data) {
              if (err) console.log(err);
              response.writeHead(200, {'Content-Type': 'text/javascript'});
              response.write(data);
              response.end();
            });
      
        }
        if(request.url.indexOf('packingTerminal.js') != -1){
            fs.readFile('./public/js/packingTerminal.js', function (err, data) {
              if (err) console.log(err);
              response.writeHead(200, {'Content-Type': 'text/javascript'});
              response.write(data);
              response.end();
            });
        }
    }
    
  
    if(request.url.indexOf('.css') != -1){

        fs.readFile('./public/css/style.css', function (err, data) {
            if (err) console.log(err);
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(data);
            response.end();
        });

    }
};
http.createServer(handleRequest).listen(8000);
app.use(express.static('public'))