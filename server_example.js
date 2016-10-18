var express = require('express')
var server = express();

server.listen(8080);
server.get('/hi', responseToClient)
server.get('/bye', anotherThingy)



function responseToClient(request, response){
  //respond to client and lets server know we have something
  console.log(request)
  response.end("Hello, cleint!")

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
