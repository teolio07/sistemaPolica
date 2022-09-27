const {dataConnection} = require('../db/database');
const Consultas =  require('../services/consultas');

class controllers{
    getCasos(req,res){
        dataConnection.query(Consultas.getCasos, async function (error, results, fields) {
            if (error) throw error;
            console.log(results[0]);
            res.send(results[0])
          })
          dataConnection.end();
    }

}

module.exports = controllers;