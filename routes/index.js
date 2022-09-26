const express = require('express');
const routesControllers = require('./routesControllers');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router)
    router.use('/casos',routesControllers)
}

module.exports = routerApi;