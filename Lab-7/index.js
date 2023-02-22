const express = require("express");
const app = express();
const port = 3000;

//app.get('/',(req,res) =>{res.send('Hello World from Express');});

/*app.get("/", (req, res) => {
  res.sendFile("home.html");
});*/

app.listen(port, () => console.log("Hello World app listening on port", port));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
}); //endpoint 1
app.get("/home3", function (req, res) {
  res.send("tanisha");
}); //endpoint 2
app.get("/home2", function (req, res) {
  res.sendFile(__dirname + "/home2.html");
}); //endpoint 3
