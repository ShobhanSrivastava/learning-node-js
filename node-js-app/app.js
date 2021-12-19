const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));

const adminRoutes = require('../node-js-app/routes/admin');

app.use(adminRoutes);

/* The app listens for the request and the request checks for the path just like if else 
in any other programming language. With the app.use function if the part of the path of the request is contained in 
the given path in the the app.use function, the function gets executed. */

app.use('/',(req, res, next) => { //This works like an else block, if nothing works, this will be executed
    res.send("<h1>Home Page</h1>")
});

app.listen(3000);