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


router.put('/:id',[multer.single('attachment')],function(req,res,next){
    const jsonBody = req.body;
    console.log('/')
    console.log(req.body)
    Marca.findById(req.params.id, function(err, marcas){
    //let marca = new Marca()
        marca.tipo = jsonBody.marca,
        marca.ciudad = jsonBody.marca,
        marca.nombre_marca = jsonBody.marca,
        marca.description = jsonBody.descripcion,
        marca.precio = jsonBody.precio,
        marca.contacto = jsonBody.contacto,
        marca.longitud = jsonBody.longitud,
        marca.latitud = jsonBody.latitud,
        marca.galeria = jsonBody.attachment,
        marca.date = new Date(Date.now()) // Agregamos la fecha de creación del modelo
    
        marca.save((err,marcaStored) =>{
           if(err) res.status(500)//.send({message:`Error: ${err}`})
        storeWithOriginalName(req.file)
        .then(encodeURIComponent)
        .then(encoded => {
        res.redirect(`/upload/success?fileName=${encoded}`)
        })
        .catch(next)
        
        res.status(200)//.send({marca: marcaStored})
        console.log('h:'+marcaStored)  // id 5d0387e8b833741408693b43
    })  
  })  
})


module.exports = router
