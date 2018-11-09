var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'c60',
        password: 'c60',
        server: '127.0.0.1', 
        database: 'TaikoApp' 
    };

    // connect to your database
    sql.connect(config, function (err) {
        app.use(bodyParser.json())
        app.use('/api', routes) 
        
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(3000, function () {
    console.log('Server is running..');
});

// const express = require('express');
// const app = express(); 
// const bodyParser = require('body-parser'); 
// const routes = require('./app/routes')

// app.use(bodyParser.json())

// app.use('/api', routes) 

// // app.get('/', function (req, res) {
// //   res.send('Hello World')
// // })

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })