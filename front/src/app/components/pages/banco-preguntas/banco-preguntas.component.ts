import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjPreguntaModel } from 'src/app/models/objPregunta.model';
import { PreguntasService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-banco-preguntas',
  templateUrl: './banco-preguntas.component.html',
  styleUrls: ['./banco-preguntas.component.css']
})
export class BancoPreguntasComponent implements OnInit {

  objsPregunta:ObjPreguntaModel[] = [];

  constructor( public preguntasService: PreguntasService,
                private router: Router ) { }

  ngOnInit(): void {
    this.preguntasService.getObjsPregunta().subscribe(
      res => this.objsPregunta = res,
      err => console.error( err )
    )
  }

  // TODO: en esta y otras funciones estos definiendo el id como any. Ver cómo poder usar esta propiedad de forma correcta. (esto se relaciona con el hecho de que en ObjPreguntaModel _id puede ser undefined)
  editarPregunta(id:any){
    this.router.navigateByUrl(`/captura-pregunta/${id}`);
  }

  irACapturaNuevaPregunta(){
	this.router.navigateByUrl('/captura-pregunta/nueva');
  }

}
