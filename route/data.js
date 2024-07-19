const express = require('express')
const con = require('./mysql_con')
const mysqldata = require('../controler/mysqldata')

const router = express.Router()

// CRUD API
 
router.post('/register', mysqldata.reg) // Creat

router.get('/register/View', mysqldata.view);  //Reat

router.put('/edit/:id', mysqldata.edit ); //Update

router.post('/login/delete/:id', mysqldata.deleteConsu); //Delete




module.exports = router