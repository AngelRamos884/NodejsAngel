const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./main');

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json());
app.use(api)
// app.use(morgan('combinated'));

module.exports = app;