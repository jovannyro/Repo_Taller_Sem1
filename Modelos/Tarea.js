const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema({
    idPersona: Number,
    tipodocumento: String,
    documento: String,
    nombres: String,
    apellidos: String,
    direccion: String,
    correo: String,
    fijo: String,
    celular: String,
    sitioweb: String,
    descripcion: String,
});

module.exports = mongoose.model('tarea', TareaSchema, 'Tareas');