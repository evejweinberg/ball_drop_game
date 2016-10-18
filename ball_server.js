var express = require('express')
var bodyParser = require('body-parser');
var server = express();

//create a folder where you can build html front end stuff
//the root of the statis stuff lives in public
server.use('/', express.static('public'));
//there will be URL encouded information ''?thing=value'
server.use(bodyParser.urlencoded({extended:true}))

server.listen(8080);
server.get('/play', responseToClient)
server.get('/bye', anotherThingy)
server.post('/requests', doPost)



function responseToClient(request, response){
  console.log(request.query)
  if (request.query.instruction == 'L'){
    console.log('left')
  } else if (request.query.instruction == 'R'){
        console.log('right')
  }
  //respond to client and lets server know we have something
  console.log(request)
  response.end("Hello, cleint!")

  //get -
  //post - send info to the server, send the header then send data in the body of the request, used of r forms alot
  // put, delete - get used less

}

function doPost(request, response){
  console.log(request.body)
  //the body of our request
  //this makes a json of the input from the index
  // console.log(request.body[down]);
  if(request.body.hasOwnProperty('down')){
    console.log('down was hit')
  }
  if(request.body.hasOwnProperty('left')){
    console.log('left was hit')
  }

  if(request.body.hasOwnProperty('right')){
    console.log('right was hit')
  }

  if(request.body.hasOwnProperty('up')){
    console.log('up was hit')
  }
  // response.write('<p>Hi</p>')
  response.redirect('/index.html')
  response.end('thanks for the post!')
  // if (request.query.age < 21){
  //   response.write('You are not old enough to play')
  // }
}

function anotherThingy(request,response){
    console.log(request.connection)
    console.log(request.connection.address)
    //end is always a text string, ussually empty
    response.end("Hello, cleint!")
    //response.write
    //response.header
}










//dont forget to install express 'npm install express'
//then run server locally ' $node server.js'
//then go to URL localhost:8080/hi

/*
this is what you can do:
-get
-posts
-put
-delete

*/
