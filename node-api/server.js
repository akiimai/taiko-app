const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const routes = require('./app/routes')

app.use(bodyParser.json())

app.use('/api', routes) 

var port = process.env.PORT || 1337

app.listen(port, () => {
    console.log('listening on port' + port)
})