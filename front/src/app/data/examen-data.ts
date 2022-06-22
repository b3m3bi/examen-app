import { ExamenModel } from "../models/examen.model";

export const examenData:ExamenModel = {
	_id: "123",
	nombre: "Examen 1",
	secciones: [
		{
			titulo: "Seccion 1",
			_idPreguntas: [],
			objsPregunta: [
				{
					_id: "",
					materia: "Español",	
					instruccionesCompartidas : '',
					contenidoCompartido : '',
					preguntas: [ 
						{ 
							texto: "Pregunta 1",
							respuestas: [
								{
									texto: "Respuesta 1",
									correcta: true
								},
								{
									texto: "Respuesta 2",
									correcta: false
								}
							]
						 },
						{ 
							texto: "Pregunta 2",
							respuestas: [
								{
									texto: "Respuesta 1",
									correcta: true
								},
								{
									texto: "Respuesta 2",
									correcta: false
								}
							]
						 }
					]
				}
			]
		},
		{
			titulo: "Seccion 2",
			_idPreguntas: [],
			objsPregunta: [
				{
					_id: "",
					materia: "Español",	
					instruccionesCompartidas : '',
					contenidoCompartido : '',
					preguntas: [ 
						{ 
							texto: "Pregunta 1",
							respuestas: [
								{
									texto: "Respuesta 1",
									correcta: true
								},
								{
									texto: "Respuesta 2",
									correcta: false
								}
							]
						 },
						{ 
							texto: "Pregunta 2",
							respuestas: [
								{
									texto: "Respuesta 1",
									correcta: true
								},
								{
									texto: "Respuesta 2",
									correcta: false
								}
							]
						 }
					]
				}
			]
		}

	]
}