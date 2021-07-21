var config = require("./config");
PORT = config.app.port;
//Llega a la informacion el el archivo config
// console.log(config.app.port)
var express = require("express");
var morgan = require("morgan");                 //middleware para manejo de datos


var index = require("./routes/index");
var admin = require("./routes/admin");
var api = require("./routes/api");

var app = express();                            //Para servidor
app.use(morgan('dev'));                         //inicializar morgan

app.set('view engine', 'ejs')                   //para el motor de plantillas ejs
app.use(express.static('public'))               //Carpeta de datos estaticos

app.use(express.urlencoded({extended:true}));   //uso de datos de formularios
app.use(express.json)                           //uso de datos json

app.use("/",index);                             //Si usuario esta en home, usa rutas de index
app.use("/admin", admin);                       //Si va a /admin, usa las rutas de admin
app.use("/api", api);                        //Si va a /admin, usa las rutas de api


app.listen(PORT, () =>{
    console.log('Server listening on port:' + PORT)});
