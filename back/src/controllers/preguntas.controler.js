preguntasCtrl = {}

const ObjPregunta = require('../models/objPregunta.model');

// TODO: manejar los errores de todas estas rutas
preguntasCtrl.getPreguntas = async (req, res) => {
	try{
		const objsPregunta = await ObjPregunta.find();
		res.json(objsPregunta); //TODO: por qué aquí uso .json()?
	}
	catch{
		res.send(err)
	}
}

preguntasCtrl.getPregunta = async (req, res) => {
	const objPregunta = await ObjPregunta.findById(req.params.id)
	res.json(objPregunta);
}

preguntasCtrl.postPregunta = async (req, res) => {
	const objPregunta = new ObjPregunta(req.body)
	await objPregunta.save();
	res.send({'message':'objPregunta created'});
}

preguntasCtrl.putPregunta = async (req,res) => {
	await ObjPregunta.findByIdAndUpdate(req.params.id,req.body);
	res.send({'message':'objPregunta updated'});
}

preguntasCtrl.deletePregunta = async (req,res) => {
	await ObjPregunta.findByIdAndDelete(req.params.id);
	res.json({'message':'objPregunta deleted'});
}



module.exports = preguntasCtrl