import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMateriaComponent } from './components/add-materia/add-materia.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { ListMateriaAlumnoComponent } from './components/list-materia-alumno/list-materia-alumno.component';
import { FormsModule } from '@angular/forms';
import { ListadoAlumnosPipe } from './pipes/listado-alumnos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddMateriaComponent,
    AddAlumnoComponent,
    ListMateriaAlumnoComponent,
    ListadoAlumnosPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
