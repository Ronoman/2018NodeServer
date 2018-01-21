const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const app = express();
const port = 3000;

// const conString = "pg://postgres:password@localhost:5432/skunk2018";
//
// var client = new pg.Client(conString);
// client.connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    next();
});

app.post('/', function(req, res) {
    console.log(req.body);

    //TODO: Match # of $x subs with the # of columns in the DB
    /*try {
        var query = client.query("INSERT INTO matches VALUES ($1, $2, $3, $4, $5)", getJsonValues(req.body));
    } catch (err) {
        console.log("Something went very wrong, Patrick must have coded this part");
        console.log(err);
    }

    query.on("end", function (result) {
        console.log("Added DB row");
    });*/
    var IT_WORKED = true;
    var ERR = "Incompetence is Patrick's best character trait";

    if(IT_WORKED) {
        res.send("success");
    } else {
        res.send(ERR);
    }
});

app.listen(port, function(err) {
    if(err) {
        return console.log("Something bad happened: ", err);
    }

    console.log("Server is listening on ", port);
});

function getJsonValues(arr) { //We call this arr because Eli's a dingleberry
    retArr = [];
    for(var key in arr) {
        if(arr.hasOwnProperty(key)) {
            retArr.push(arr.key);
        }
    }

    return retArr;
}
