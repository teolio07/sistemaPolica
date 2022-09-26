//const services = require('../services/services');
//const service = new services();

const connect = require('../db/database')
const connection = new connect();

class controllers{
    getCasos(req,res){
        connection.connect();
        let casos = connection.getCasos();
        
        res.send('funciona');
    }

}

module.exports = controllers;