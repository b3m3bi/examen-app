import { Component, OnInit, Input } from '@angular/core';
import { SeccionModel } from 'src/app/models/seccion.model';

@Component({
  selector: 'app-display-seccion',
  templateUrl: './display-seccion.component.html',
  styleUrls: ['./display-seccion.component.css']
})
export class DisplaySeccionComponent implements OnInit {

  @Input() seccion = new SeccionModel();
  @Input() i_padre?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
