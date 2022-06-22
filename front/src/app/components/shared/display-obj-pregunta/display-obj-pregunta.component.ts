import { Component, Input, OnInit } from '@angular/core';
import { ObjPreguntaModel } from 'src/app/models/objPregunta.model';
import { PreguntaModel } from 'src/app/models/pregunta.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-display-obj-pregunta',
  templateUrl: './display-obj-pregunta.component.html',
  styleUrls: ['./display-obj-pregunta.component.css']
})
export class DisplayObjPreguntaComponent implements OnInit {

	@Input() displayNumero = false;
  @Input() objPregunta: ObjPreguntaModel = new ObjPreguntaModel();
  @Input() i_padre?: string;

  constructor( public examenService: ExamenService ) { }

  ngOnInit(): void {
  }

  obtenerNumPergunta( pregunta: PreguntaModel){
    return this.examenService.preguntas.indexOf(pregunta) + 1;
  }


}
