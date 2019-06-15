var express = require('express')
var fs = require('fs')
var path = require('path')
var util = require('util')
var router = express.Router()

var Marca = require('../models/tarea')

function filterDotFiles (files) {
  return files.filter(f => f.match(/^[^.].*$/))
}
// funciona
router.get('/', function (req, res, next) {
  //const testFolder = path.join(__dirname, '../public/uploads')
 const testFolder = path.join(__dirname, '/home/marceloe/Escritorio/Arquitectura/Trabajo_Final_Inmobiliaria/imagenes')
  var readdir = util.promisify(fs.readdir)

  return readdir(testFolder)
    .then(filterDotFiles)
    .then(files => {
      res.render('files.ejs', {files})
    })
    .catch(next)
})


module.exports = router
