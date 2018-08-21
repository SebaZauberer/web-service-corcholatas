const express = require('express');
const body = require('connect-multiparty')();
const app = express();
const mongoose = require('mongoose');
const config = require('./settings/config');
const routes = require('./routes/routes')

app.use("/", body, routes);


mongoose.connect(config.DATABASE, err =>{
    if(err){
        console.log(err);
    } else{
        console.log("ok");
    }
});

app.listen(config.SERVER.port, err =>{
    if(err){
        console.log(err);
    } else{
        console.log("Serve running in port", config.SERVER.port);
    }
})