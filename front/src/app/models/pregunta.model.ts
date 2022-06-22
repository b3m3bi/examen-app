import { RespuestaModel } from "./respuesta.model";

export class PreguntaModel {
	texto = "";
	imgUrl?: string;
	respuestas:RespuestaModel[] = [];
}