const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var inmoviliariaSchema = new Schema({
  id: Number,
  tipo:String,
  ciudad:String,
  nombre_marca: String,
  description: String,
  precio: Number,
  contacto: String,
  longitud: String,
  latitud: String,
  galeria: String,
  date: Date
});

const Marca = mongoose.model('Marca',inmoviliariaSchema);

module.exports = Marca;
