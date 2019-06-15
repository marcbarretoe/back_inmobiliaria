var express = require('express')
const http = require("http");
const mongoose = require("mongoose");
var path = require('path')
var logger = require('morgan')
var bodyParser = require('body-parser')



const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = process.env.PORT || 3000;

//const app = express();
//mongoose.connect('mongodb://localhost:27017/tareas-backend', {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/inmoviliariaApp', (err, res) =>{
   if(err) throw err
   console.log('conexion exitosa...')

/*app.listen(port,() => {
       console.log(`Api Rest corriendo en http://localhost:${port}`)
   })  //5d0300e8f7b1c1169dca0280
 */  
})




var index = require('./routes/index')
var upload = require('./routes/upload')
var files = require('./routes/files')
var obtener = require('./routes/obtener')
var borrar = require('./routes/borrar')



var app = express()


/*app.get('/', function(req, res) {
   res.send("Hello World!");
});*/


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/upload', upload)
app.use('/files', files)
app.use('/marcas', obtener)
app.use('/marcas/:id', obtener)
app.use('/borrar/:id', borrar)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found h')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
