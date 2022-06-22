import { ObjPreguntaModel } from "./objPregunta.model";

export class SeccionModel {
	titulo = '';
	_idPreguntas: string[] = [];
	objsPregunta: ObjPreguntaModel[] = [];
}