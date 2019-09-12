const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

//Se agregan los middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas
require('./services/routes/server')(app);
require('./services/routes/default')(app);

const server = app.listen(7000, () => {
    console.log(`Escuchando en el puerto ${server.address().port}...`);
});