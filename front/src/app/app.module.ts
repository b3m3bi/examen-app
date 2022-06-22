import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { CapturaPreguntaComponent } from './components/pages/captura-pregunta/captura-pregunta.component';
import { CrearExamenComponent } from './components/pages/crear-examen/crear-examen.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BancoPreguntasComponent } from './components/pages/banco-preguntas/banco-preguntas.component';
import { DisplayObjPreguntaComponent } from './components/shared/display-obj-pregunta/display-obj-pregunta.component';
import { ExamenComponent } from './components/pages/examen/examen.component';
import { DisplaySeccionComponent } from './components/shared/display-seccion/display-seccion.component';
import { ObjPreguntaSelectComponent } from './components/shared/obj-pregunta-select/obj-pregunta-select.component';
import { ExamenesComponent } from './components/pages/examenes/examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturaPreguntaComponent,
    CrearExamenComponent,
    NavbarComponent,
    BancoPreguntasComponent,
    DisplayObjPreguntaComponent,
    ExamenComponent,
    DisplaySeccionComponent,
    ObjPreguntaSelectComponent,
    ExamenesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    KatexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
