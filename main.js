const express = require('express');
const api = express.Router();
const movesCtrl = require('./Controllers/moveCtrl');

api.get('/moves',movesCtrl.getMoves )
api.post('/createMove', movesCtrl.createMove)

module.exports = api;