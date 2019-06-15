var express = require('express')
var Marca = require('../models/tarea')
const mongoose = require("mongoose");

var fs = require('fs')
var path = require('path')
var util = require('util')

const bodyParser = require("body-parser");


var multer = require('multer')({
  dest: 'public/uploads'
})

var router = express.Router()
router.use(bodyParser.json());


router.delete('/:id',function(req,res,next){
     console.log('hola aqui')
     Marca.findById(req.params.id, function(err, marcas){
       marca.remove(function(err){
         if(err) return rest.status(500).send(err.message)

      console.log('DEL/borrar/'+ req.params.id)
      res.status(200).jsonp(marcas)
      // res.status(200).send()
       })
     })
})



module.exports = router
