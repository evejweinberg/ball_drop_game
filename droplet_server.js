var express = require('express')
var bodyParser = require('body-parser');
var server = express();

//create a folder where you can build html front end stuff
//the root of the statis stuff lives in public
server.use('/', express.static('public'));
server.post('/requests', doPost)
server.listen(8080);
server.use(bodyParser.urlencoded({extended:true}))

server.get('/up', upF)

function upF(){
	client.write('u');
	console.log('up window opwn')

}

const net = require('net');
// 172.22.151.124
const client = net.connect("8080","172.16.252.152",function(){
	console.log("connected to server!");

	client.write('n=' + 'E++++++M' +'\n');
	client.write('i');

});

server.get('/test', function(req,res){

	console.log('we hit the "test" endpoint');

});


function doPost(request, response){
	  console.log(request.body)
	  //the body of our request
	  //this makes a json of the input from the index
	  // console.log(request.body[down]);
	  // if(request.body.hasOwnProperty('down')){
		// 	client.write('d');
	  //   console.log('down was hit')
	  // }
	  // if(request.body.hasOwnProperty('left')){
		// 		client.write('l');
	  //   console.log('left was hit')
	  // }
		//
	  // if(request.body.hasOwnProperty('right')){
	  //   console.log('right was hit')
		// 	client.write('r');
	  // }
		//
	  // if(request.body.hasOwnProperty('up')){
	  //   console.log('up was hit')
		// 	client.write('u');
	  // }
	  // // response.write('<p>Hi</p>')
	  // response.redirect('/index.html')
	  // response.end('thanks for the post!')
	  // if (request.query.age < 21){
	  //   response.write('You are not old enough to play')
	  // }
	}
