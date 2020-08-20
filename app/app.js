const express = require("express");
const bodyParser = require ("body-parser");
const pokemon = require('./routes/pokemon-route');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json
app.use(bodyParser.json())

app.use('/pokemon', pokemon);

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});