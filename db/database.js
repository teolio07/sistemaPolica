const mysql = require('mysql');


const dataConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_departamentopolicia'
  });

const connectDatabase = ()=>{
    dataConnection.connect(function(err) {
        if (err) console.log('server stop');
        console.log("Connected!");
    });
}

module.exports = {dataConnection,connectDatabase}