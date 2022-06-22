import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjPreguntaModel } from '../models/objPregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  URL_API = 'http://localhost:3000/api/preguntas';

  objsPregunta: ObjPreguntaModel[] = [];
//   objPreguntaSeleccionado = new ObjPreguntaModel();

  constructor( private http: HttpClient ) { }

  // TODO: ver donde usaba eso y arreglarlo
//   borrarObjSeleccionado(){
//     console.log('Se borra la selección')
//     this.objPreguntaSeleccionado = new ObjPreguntaModel();
//   }

  // llamadas a la API

  getObjPregunta(id: string){
    return this.http.get<ObjPreguntaModel>(`${this.URL_API}/${id}`);
  }

  getObjsPregunta(){
    return this.http.get<ObjPreguntaModel[]>(`${this.URL_API}`);
  }

  createObjPregunta( objPregunta: ObjPreguntaModel ) {
    return this.http.post(`${this.URL_API}`, objPregunta);
  }

  // TODO: reparar esto que hace que back crashé
  updateObjPregunta( objPregunta: ObjPreguntaModel ) {
	console.log(objPregunta)
    return this.http.put( `${this.URL_API}/${objPregunta._id}`, objPregunta );
  }

  deleteObjPregunta( objPregunta: ObjPreguntaModel ) {
    return this.http.delete( `${this.URL_API}/${objPregunta._id}` );
  }

  uploadImage( form: FormData ){
    return this.http.post( `${this.URL_API}/img`, form )
  }

  deleteImg( imgName: string ){
    return this.http.delete(`${this.URL_API}/img/${imgName}`);
  }
}
