const express = require('express');
const routesControllers = express.Router();

const controllers = require('../controllers/controllers');
const controller = new controllers();

routesControllers.get('/getCasos',controller.getCasos);

module.exports = routesControllers;