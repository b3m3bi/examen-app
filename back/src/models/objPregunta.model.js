const { Schema, model } = require('mongoose');

const RespuestaSchema = new Schema({
	texto: String,
	imgUrl: String,
	correcta: Boolean
})

const PreguntaSchema = new Schema({
	texto: String,
	imgUrl: String,
	respuestas: [RespuestaSchema]
})

const ObjPreguntaSchema = new Schema({
	materia: String,
	instruccionesCompartidas: String,
	contenidoCompartido: String,
	imgUrl: String,
	preguntas: [PreguntaSchema]
})

module.exports = model('ObjPregunta', ObjPreguntaSchema);