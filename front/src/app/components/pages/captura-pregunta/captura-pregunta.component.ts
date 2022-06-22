import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { materias } from 'src/app/data/materias';
import { ObjPreguntaModel } from 'src/app/models/objPregunta.model';
import { PreguntaModel } from 'src/app/models/pregunta.model';
import { RespuestaModel } from 'src/app/models/respuesta.model';
import { PreguntasService } from 'src/app/services/preguntas.service';
import * as Editor from '../../../../assets/ckeditor/ckeditor';

@Component({
  selector: 'app-captura-pregunta',
  templateUrl: './captura-pregunta.component.html',
  styleUrls: ['./captura-pregunta.component.css']
})
export class CapturaPreguntaComponent implements OnInit {

    id = '';
  objPregunta = new ObjPreguntaModel();
  materias = materias;
  public grupoPreguntas = false;
  public Editor = Editor;


  constructor( public preguntasService: PreguntasService,
                private router: Router,
				private route: ActivatedRoute ) { 
  }
  
  ngOnInit(): void {
	this.route.params.subscribe( params => {
		this.id = params['id'];
		if(this.id === 'nueva'){
			this.objPregunta = new ObjPreguntaModel();
		} else {
			this.preguntasService.getObjPregunta( this.id ).subscribe(
				res => {
					this.objPregunta = res;
				}
			)
		}
	})
	
  }

  // modificaciones del objeto
  agregarPregunta(){
	this.objPregunta.preguntas.push(new PreguntaModel());
  }

  borrarPregunta(index_pregunta:number){
	this.objPregunta.preguntas.splice(index_pregunta,1);
  }

  agregarRespuesta(index_pregunta:number){
	this.objPregunta.preguntas[index_pregunta].respuestas.push(new RespuestaModel());
  }

  borrarRespuesta(index_pregunta:number,index_respuesta:number){
	this.objPregunta.preguntas[index_pregunta].respuestas.splice(index_respuesta,1);
  }


// llamadas al API
  guardarObjPregunta( objPregunta: ObjPreguntaModel ){
    // se actualiza un objeto
    if(objPregunta._id){
      this.preguntasService.updateObjPregunta(objPregunta).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    } else {
      // se envia un objeto nuevo
    this.preguntasService.createObjPregunta(objPregunta).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
    }
  }

  eliminarObjPregunta(objPregunta: ObjPreguntaModel){
    this.preguntasService.deleteObjPregunta(objPregunta).subscribe( 
      res =>  {
        console.log(res)
        this.router.navigateByUrl('/banco-preguntas'); 
      },
      err => console.log(err)
    );
  }

  uploadImg(event: any, destObj: ObjPreguntaModel | PreguntaModel | RespuestaModel ){
    //TODO borrar imágen existente si ya existe una y luego actualizar
    let selectedFile:File = event.target.files[0];
    const fd = new FormData();
    fd.append( 'imagen', selectedFile);
    this.preguntasService.uploadImage( fd ).subscribe(
      (res:any) =>  {
        console.log(res)
        destObj.imgUrl = res.imgUrl;
      },
      err => console.log(err)
    );
  }

  // TODO: pensar cómo hacer para que no haya conflicto entre la funcionalidad guardar y la actualización de las imágenes (i.e., un usuario esperaría que aunque cambie la imagen si no le da guardar esta no se cambie definitivamente)
  deleteImg(imgUrl: string){
    let imgUrlObj = new URL( imgUrl );
    let imgName =  imgUrlObj.pathname.match('\/images\/(.*)')?.[1];
    console.log(imgName);
    if(imgName !== undefined ){
      this.preguntasService.deleteImg(imgName).subscribe(
        res => {
          console.log(res)
			this.objPregunta.imgUrl = undefined;
        },
        err => console.error(err)
      )
    }
  }

}
