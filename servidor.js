//console.log("Hola mundo desde nodejs")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./Modelos/Tarea.js")

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Conexión a la BD
mongoose.connect("mongodb+srv://Desarrollador:ProgramacionWeb@clusterproweb.btwtf.mongodb.net/ActividadesBD?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/', (req,res) => {
    res.send("El inicio de mi API")
});


router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo tareas");
        }
        else{
            res.send(datos);
        }
    })

});

router.post('/tarea', (req,res) => {
    let nuevaTarea = new TareaSchema({
        idPersona: req.body.id,
        tipodocumento: req.body.tipodocumento,
        documento: req.body.documento,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correo: req.body.correo,
        fijo: req.body.fijo,
        celular: req.body.celular,
        sitioweb: req.body.sitioweb,
        descripcion: req.body.descripcion,
       
    });

    nuevaTarea.save(function(err, datos){
        if (err){
           console.log(err); 
        }
        res.send("Tarea almacenada correctamente")
    })

});



app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});