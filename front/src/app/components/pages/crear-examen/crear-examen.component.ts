import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenModel } from 'src/app/models/examen.model';
import { SeccionModel } from 'src/app/models/seccion.model';
import { ExamenService } from 'src/app/services/examen.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css']
})
export class CrearExamenComponent implements OnInit {

  public examen = new ExamenModel();
  public examenId = '';
  public seccionEditada = 0;

  constructor(  private examenService: ExamenService,
                private route: ActivatedRoute,
                private router: Router ) { 
    this.route.params.subscribe(
      params => {
        this.examenId = params.id
        this.examenService.getExamen( this.examenId ).subscribe(
          res => {
            this.examen = res;
          },
          err => {
            console.error(err)
          }
        )
      } 
    )
  }
    
  ngOnInit(): void {
  }

  agregarSeccion(){
    this.examen.secciones.push( new SeccionModel() );
  }

  borrarSeccion(i: number){
    this.examen.secciones.splice(i,1);
  }

  abrirModal( seccionAEditar: number){
    this.seccionEditada = seccionAEditar;
    let modal = document.getElementById('modal');
    if(modal !== null ){
      modal.style.display = "block";
    }
  }

  cerrarModal(event?: Event){
    let modal = document.getElementById('modal');
    if ( modal !== null ){
      if (event){
        if( event.target !== null && event.target instanceof HTMLElement && event.target.id === 'modal'){
          modal.style.display = "none";
        }
      } else {
        modal.style.display = "none";
      }
    } 
  }

  agregarPreguntasASeccion( indexSeccion: number, preguntasAAgregar: string[] ){
    let listaIds = this.examen.secciones[indexSeccion]._idPreguntas;
    this.examen.secciones[indexSeccion]._idPreguntas = listaIds.concat( preguntasAAgregar )
    this.examenService.postExamen(this.examen).subscribe(
      res => {
        console.log(res)
      }
    )
    this.cerrarModal()
  }

  borrarExamen(){
    this.examenService.deleteExamen( this.examen._id ).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/examenes');
      },
      err => console.error(err)
    )
  }

  guardarExamen(){
    this.examenService.putExamen( this.examen ).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }


}
