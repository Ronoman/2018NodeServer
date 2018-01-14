const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.send("Received");
});

app.listen(port, function(err) {
    if(err) {
        return console.log("Something bad happened: ", err);
    }

    console.log("Server is listening on ", port);
});
