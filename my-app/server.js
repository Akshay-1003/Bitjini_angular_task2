const express = require('express');
const path= require('path');
var app = express();
const PORT=process.env.PORT || 5000;
var app_path = './dist/my-app'

app.use('/',express.static(path.join(__dirname,app_path))).listen(PORT,()=>console.log(`Listening on ${PORT} `));