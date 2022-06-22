import { PreguntaModel } from "./pregunta.model";

export class ObjPreguntaModel {
	_id?: string;
	materia = 'Selecciona una materia';
	instruccionesCompartidas = '';
	contenidoCompartido = '';
	imgUrl? : string;
	preguntas:PreguntaModel[] = [];
	constructor(){
		this.preguntas = [ new PreguntaModel()]
	}
}