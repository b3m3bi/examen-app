examenesCtrl = {};

const Examen = require('../models/examen.model');
const ObjPregunta = require('../models/objPregunta.model');

// TODO: ¿qué hacer con las preguntas contenidas en un examen pero borradas del banco?
examenesCtrl.getExamen = async (req, res) => {
	try {
		let examen = await Examen.findById( req.params.id ).lean();
		for ( const seccion of examen.secciones ){
			let objsSeccion = []
			for ( const id of seccion._idPreguntas ){
				let objPregunta = await ObjPregunta.findById( id );
				objsSeccion.push(objPregunta)
			}	
			seccion.objsPregunta = objsSeccion;
		}
		res.send(examen)
	}
	catch (err) {
		res.send(err)
	}
}

examenesCtrl.getExamenes = async (req, res) => {
	try{
		const examenes = await Examen.find();
		res.send(examenes);
	}
	catch (err) {
		res.send(err);
	}
}

examenesCtrl.postExamen = async (req, res) => {
	try{
		const examen = new Examen();
		await examen.save();
		res.send({
			'message' : 'Examen creado',
			'_id' : examen._id
		});
	}
	catch (err){
		res.send(err);
	}
}

examenesCtrl.putExamen = async (req, res) => {
	try{
		const examenUpdated = await Examen.findByIdAndUpdate( req.params.id, req.body, { new: true} );
		res.send(examenUpdated)
	}
	catch (err){
		res.send(err);
	}
}

examenesCtrl.deleteExamen = async (req,res) => {
	try{
		await Examen.findByIdAndDelete( req.params.id);
		res.send({'message':'examen deleted'});
	}
	catch (err){
		res.send(err);
	}
}

module.exports = examenesCtrl;