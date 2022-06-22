import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ExamenModel } from 'src/app/models/examen.model';
import { ObjPreguntaModel } from 'src/app/models/objPregunta.model';
import { ExamenService } from 'src/app/services/examen.service';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-obj-pregunta-select',
  templateUrl: './obj-pregunta-select.component.html',
  styleUrls: ['./obj-pregunta-select.component.css']
})
export class ObjPreguntaSelectComponent implements OnInit {

  @Output() seleccionPreguntasEvent = new EventEmitter<Array<string>>();

  idsSeleccion:string[] = [];

  constructor( public preguntasService: PreguntasService,
                private exameneService: ExamenService ) { }

  ngOnInit(): void {


    this.preguntasService.getObjsPregunta().subscribe(
      res => {
        this.preguntasService.objsPregunta = res;
      },
      err => console.error(err)
    )
  }

  agregarASeleccion(id:any){
    !this.idsSeleccion.includes(id)?  this.idsSeleccion.push(id) : this.idsSeleccion.splice(this.idsSeleccion.indexOf(id),1);
    console.log( this.idsSeleccion)
  }
  
  agregarPreguntas( listaSeleccion: string[] ){
    this.seleccionPreguntasEvent.emit( listaSeleccion );
  }

}
