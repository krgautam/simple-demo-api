var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.get('/', function(req, res){
   res.send("Hello world!");
});
app.post('/',function(req,res){
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
});
app.listen(3000);