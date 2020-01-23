var express = require("express")
var path = require("path");
const fs = require('fs');
var index = ("./public/assets/js/index.js")
var app = express();
var PORT = process.env.PORT || 3000;
// need to read the json file and parse it to properly import json
const db = fs.readFile('./db/db.json', function (err, data) {

})
console.log("this is db" + db)


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
    res.json(db)
});
app.post('/api/notes', function (req, res) {
    db.push(req.body); // add note to the json
    fs.writeFile('./db/db.json', req.body, function () {
        //write to json
    })
    res.json(db);

})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});