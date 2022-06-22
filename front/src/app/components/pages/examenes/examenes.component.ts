import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenModel } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  examenes: ExamenModel[] = [];

  constructor( private examenService: ExamenService,
                private router: Router ) {}

  ngOnInit(): void {
    this.examenService.getExamenes().subscribe(
      (res:ExamenModel[]) => {
        this.examenes = res
      }
    )
  }

  contarPreguntas( examen: ExamenModel): number {
    let contador = 0
    examen.secciones.forEach( seccion => {
      seccion._idPreguntas.forEach( () => {
        contador += 1;
      });
    });
    return contador;
  }

  irAEditarExamen( id: string ):void{
    this.router.navigateByUrl(`/crear-examen/${id}`)
  }

  irAVerExamen(id:string):void{
	  this.router.navigateByUrl(`/examen/${id}`);
  }

  crearNuevoExamen(){
    this.examenService.postExamen( new ExamenModel() ).subscribe(
      ( res: any) => { 
        console.log(res)
        this.router.navigateByUrl(`/crear-examen/${res._id}`)
      },
      err => console.error(err)
    )
  }
}
