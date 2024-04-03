const express = require('express');

const body_parser = require('body-parser')
const route = require('./route/route')
const mongoose = require('./db/dataconect')

let book = express()
book.set('view engine' , 'ejs');
book.use(body_parser.urlencoded({extended : true}))

book.use('/' , route)

mongoose
book.listen(3006 , () =>{
    console.log("server run to 3006");
})