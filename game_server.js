
const net = require('net');
const client = net.connect("8080","172.22.151.124",function(){
	console.log("connected to server!");

	client.write('n=' + 'E + M' +'\n');
	client.write('i');

	// setInterval(function(){
// },2000);

		//if we hear form the front end that L happened
		//client.write('l');
		//if we hear form the front end that r happened
		//client.write('r');
		//if we hear form the front end that u happened
		//client.write('u');
		//if we hear form the front end that d happened
		//client.write('d');
		
});
