const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");


const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server side!"});
});

app.get("/api/movies", (req, res) => {
  fs.readFile( __dirname + "/" + "movies.json", "utf8", (err, data) => {
    console.log( data );
    res.end( data );
  });
});

app.post("/api/movies", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});