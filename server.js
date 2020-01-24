var express = require("express")
var path = require("path");
const fs = require('fs');
// var index = require("./public/assets/js/index")
var app = express();
var db = require("./db/db.json");
var PORT = process.env.PORT || 3000;
// need to read the json file and parse it to properly import json
// const db = fs.readFile('./db/db.json', function (err, data) {
//     console.log(data + "is here");

// })
// console.log("this is db" + db)
var dataToGo = []

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//HTMLroutes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    // res.send("Hello World")
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});


//API routes
app.get("/api/notes", function (req, res) {
    fs.readFile('./db/db.json', function (err, data) {
        console.log(data + "is here");
        res.json(data)

    })
});
app.post('/api/notes', function (req, res) {
    console.log(req.body + "is here");
    db.push(req.body);
    console.log(db);
    let data = JSON.stringify(db, null, 2);

    fs.writeFile("./db/db.json", data, function (err) {
        if (err) throw err
        console.log("write is working");

    })
    res.json("data saved")

});



app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});