import { SeccionModel } from './seccion.model';

export class ExamenModel {
	_id = '';
	nombre = '';
	secciones: SeccionModel[] = [];
}