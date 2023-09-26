import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAlumno } from 'src/app/models/alumno';
import { IMateria } from 'src/app/models/materia';
import { MateriaDataService } from 'src/app/services/materia-data.service';

@Component({
  selector: 'co-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  alumno: IAlumno = {
    nombre: ""
  }

  localListMaterias: IMateria[] = [];

  constructor(private dataServices: MateriaDataService) { }

  public onAdd(event: NgForm){
    if(event.valid){
      let nuevoAlumno: IAlumno = {nombre: event.value.alumno}
      let i: number = this.localListMaterias.findIndex(x => x.nombre == event.value.materia)
      if(this.localListMaterias[i] != undefined){
        //TODO: Encontrar la forma de usar la funcion de la clase IMateria [isAvailable()]
        if(this.dataServices.validateAlumno(i)){
          this.dataServices.addAlumno(this.localListMaterias[i], nuevoAlumno);
          this.localListMaterias = this.dataServices.list();
          event.resetForm();
          alert("alumno agregado")
        }
        else{
          alert("cupo lleno")
        }
      }
      else{
        alert("No se a encontrado la materia")
      }
    }
  }

  ngOnInit(): void {
    this.localListMaterias = this.dataServices.list();
  }

}
