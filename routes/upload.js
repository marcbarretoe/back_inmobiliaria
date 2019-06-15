var express = require('express')
var Marca = require('../models/tarea')
const mongoose = require("mongoose");

var fs = require('fs')
var path = require('path')
var util = require('util')

const bodyParser = require("body-parser");


var multer = require('multer')({
  dest: 'public/uploads'
  //dest:'/home/marceloe/Documentos'
})

var router = express.Router()
router.use(bodyParser.json());


router.get('/', function (req, res, next) {
  res.render('uploadForm.ejs')
})

router.get('/success', function (req, res, next) {
  var {fileName} = req.query
  res.render('uploadOk.ejs', {fileName})
  
})



router.post('/',[multer.single('attachment')],function(req,res,next){
    const jsonBody = req.body;
    console.log('/')
    console.log(req.body)

    let marca = new Marca()
    marca.tipo = jsonBody.tipo,
    marca.ciudad = jsonBody.ciudad,
    marca.nombre_marca = jsonBody.marca,
    marca.description = jsonBody.descripcion,
    marca.precio = jsonBody.precio,
    marca.contacto = jsonBody.contacto,
    marca.longitud = jsonBody.longitud,
    marca.latitud = jsonBody.latitud,
    marca.galeria = 'public/uploads'+ jsonBody.attachment,
    marca.date = new Date(Date.now()) // Agregamos la fecha de creación del modelo
    console.log('que es'+marca.galeria)
    marca.save((err,marcaStored) =>{
       if(err) res.status(500)//.send({message:`Error: ${err}`})
      //console.log('archivo '+ req.file)
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



/*router.post('/marcas',function(req,res,next){
       res.status(200).send({marca: marcaStored})
    })    
})
*/

/*router.post('/', [multer.single('attachment')], function (req, res, next) {
  return storeWithOriginalName(req.file)
    .then(encodeURIComponent)
    .then(encoded => {
      res.redirect(`/upload/success?fileName=${encoded}`)
    })
    .catch(next)
})
*/

function storeWithOriginalName (file) {
  //var aux = Buffer.from(file).toString('base64');
  //console.log(aux);
  var fullNewPath = path.join(file.destination, file.originalname)
  var rename = util.promisify(fs.rename)

  return rename(file.path, fullNewPath)
    .then(() => {
      return file.originalname
    })
}

module.exports = router
