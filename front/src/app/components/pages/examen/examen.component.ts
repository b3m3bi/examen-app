import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenModel } from 'src/app/models/examen.model';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

	examen: ExamenModel = new ExamenModel;
	id = '';

  constructor( public examenService: ExamenService,
	private route: ActivatedRoute ) { }


  ngOnInit(): void {
	  this.route.params.subscribe( 
		  params => {
		  	this.id = params['id'];
	  }, err => console.error(err));

	this.examenService.getExamen(this.id).subscribe(
		res => {
			this.examen = res;
			this.examenService.examenSeleccionado = res;
			this.examenService.construirListaPreguntas();
		}, err => console.error(err)
	)
  }

}
