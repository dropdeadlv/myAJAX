
var express = require('express');

var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var fs = require('fs');


app.use(express.static(__dirname)); //встановлення каталогу для статичного контенту

app.get('/',function(req,res){
	res.sendFile(__dirname+"/index 03.11.2016.html");
});

app.get('/form',function(req,res){
	res.sendFile(__dirname+"/form.html");
});

app.get('/list',function(req,res){
	res.sendFile(__dirname+"/data.json");
});

app.get('/formget',function(req,res){
	console.log(req.query);

	var file = require('./data.json');
	console.log(file);

	file.push(req.query);
	var str = JSON.stringify(file);
	fs.writeFileSync('data.json', str);
	res.send("Дані передані на сервер");
});

app.post('/formsendpost',function(req,res){
	var id = req.body.id;
	var file = require('./data.json');
	console.log(file);
	console.log(req.body);

	file.splice(id,1);

	var str = JSON.stringify(file);
	fs.writeFileSync('data.json', str);
	res.send(str);
});
/*
app.post('/postsend',function(req,res){
	console.log(req.body);

	res.send("req.body.myinput");
});
*/
/*
app.get('/myget',function(req,res){
	console.log(req.query);
	res.send('success')
});
*/
app.post('/mypost',function(req,res){
	console.log(req.body);
	res.send('success')
});

app.listen(process.env.PORT);
console.log('server is running!')