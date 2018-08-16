'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//Carrega as rotas
const index = require('./routes/index');
const productsRoute = require('./routes/product');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', productsRoute);
module.exports = app;