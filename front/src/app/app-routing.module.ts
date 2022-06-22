import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoPreguntasComponent } from './components/pages/banco-preguntas/banco-preguntas.component';
import { CapturaPreguntaComponent } from './components/pages/captura-pregunta/captura-pregunta.component';
import { CrearExamenComponent } from './components/pages/crear-examen/crear-examen.component';
import { ExamenComponent } from './components/pages/examen/examen.component';
import { ExamenesComponent } from './components/pages/examenes/examenes.component';

const appRoutes: Routes = [
  { path: 'captura-pregunta/:id',  component: CapturaPreguntaComponent },
  { path: 'crear-examen/:id', component: CrearExamenComponent },
  { path: 'banco-preguntas', component: BancoPreguntasComponent },
  { path: 'examen/:id', component: ExamenComponent },
  { path: 'examenes', component: ExamenesComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
