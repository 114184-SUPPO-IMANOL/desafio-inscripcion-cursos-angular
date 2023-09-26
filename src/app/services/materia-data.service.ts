import { Injectable } from '@angular/core';
import { IMateria } from '../models/materia';
import { IAlumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class MateriaDataService {

  private listMateria: IMateria[] = []

  constructor() { }

  validateMateria(materia: IMateria): boolean{
    let validar = true;
    if(this.listMateria.length > 0){
      this.listMateria.forEach(element => {
        if(element.nombre == materia.nombre){
          validar = false;
        }
      });
    }
    return validar;
  }

  validateAlumno(i: number): boolean{
    if(this.listMateria[i].alumnos != undefined){
      if(this.listMateria[i].alumnos.length < this.listMateria[i].limiteAlumnos){
        return true
      }
      else{
        return false
      }
    }
    return true
  }

  addAlumno(materia: IMateria, alumno: IAlumno){
    this.listMateria.forEach(x => {
      if(x.nombre === materia.nombre){
        if(x.alumnos === undefined){
          x.alumnos = [alumno]
        }
        else{
          x.alumnos.push(alumno)
        }
      }
    });
  }

  add(materia: IMateria){
    this.listMateria.push(materia);
  }

  list(): IMateria[]{
    return this.listMateria;
  }
}
