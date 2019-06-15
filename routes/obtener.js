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


router.get('/',function(req,res,next){
  // Retrieve and return all notes from the database.
    console.log('hola')
    //exports.findAll = function(req, res){
    Marca.find(function(err, marcas){
    if(err) res.send(500, err.message);

    console.log('GET/marcas')

res.setHeader("Access-Control-Allow-Headers", "Accept,Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,GET,POST");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Allow", "OPTIONS,GET,POST");
        res.status(200).jsonp(marcas);        
    });
//};

})


// 2
/*
router.get('/',(req,res) =>{
  // Retrieve and return all notes from the database.
console.log('hola')
exports.findAll = (req, res) => {
    Marca.find()
    .then(marcas => {
        res.send(marcas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

})
*/

router.get('/:id',function(req,res,next){
    //exports.findById = function(req, res){
    Marca.findById(req.params.id, function(err, marcas){
      if(err) return res.send(500, err.message)//{message:`Error: ${err}`})
      //if(!Marca) return res.status(404).send({message:`No Exitoso!!`})
      
      console.log('GET/marcas/'+ req.params.id)
      res.status(200).jsonp(marcas)
    })
   //}
})



module.exports = router
