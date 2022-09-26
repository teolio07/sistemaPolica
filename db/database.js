const mysql = require('mysql');

class connection {
    constructor(){
    this.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'db_departamentopolicia'
        });
    }
   connect(){
        this.connection.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });

   }
   getCasos(){
     this.connection.query('SELECT * from atracadores', function (error, results, fields) {
        if (error) throw error;
        console.log(results[0]);
      });
       
      this.connection.end();
   }
  



}

  module.exports = connection



