const express = require('express');
const app = express();
const routerApi = require('./routes/index')
const port = 3005;
const {connectDatabase} = require('./db/database')
app.use(express.json())
//const bodyParser = require('body-parser');

//connect Database
connectDatabase()


//router api
routerApi(app);


app.listen(port,(error)=>{
    if(error) console.log('server stop')
    console.log('server running');
})