var express = require("express")
var path = require("path")
var app = express();
var PORT = process.env.PORT || 3000;






app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
    // res.send("Hello World")
});
app.get("/notes", function (req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});