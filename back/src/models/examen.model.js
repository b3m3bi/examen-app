const { Schema, model } = require('mongoose');

const SeccionSchema = new Schema({
	titulo: String,
	_idPreguntas: [String]
})

const ExamenSchema = new Schema({
	nombre: String,
	secciones: [SeccionSchema]
})

module.exports = model('Examen', ExamenSchema);