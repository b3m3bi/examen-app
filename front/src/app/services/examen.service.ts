import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExamenModel } from '../models/examen.model';
import { PreguntaModel } from '../models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  URL_API = 'http://localhost:3000/api/examenes';
  examenSeleccionado = new ExamenModel();
  preguntas:PreguntaModel[] = [];

  constructor( private http: HttpClient ) { }

  postExamen( examen: ExamenModel ){ 
    return this.http.post(`${this.URL_API}`, examen );
  }

  getExamen( id: string){
    return this.http.get<ExamenModel>(`${this.URL_API}/${id}`);
  }

  getExamenes(){
    return this.http.get<ExamenModel[]>(`${this.URL_API}`);
  }

  putExamen( examen: ExamenModel ){
    return this.http.put(`${this.URL_API}/${examen._id}`, examen);
  }

  deleteExamen( id: string){
    return this.http.delete(`${this.URL_API}/${id}`);
  }

  construirListaPreguntas():void{
	  this.preguntas = [];
    this.examenSeleccionado.secciones.forEach( seccion => {
      seccion.objsPregunta.forEach( objPregunta => {
        objPregunta.preguntas.forEach( pregunta => {
          this.preguntas.push(pregunta);
        })
      })
    })
  }

}