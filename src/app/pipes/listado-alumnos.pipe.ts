import { Pipe, PipeTransform } from '@angular/core';
import { IAlumno } from '../models/alumno';

@Pipe({
  name: 'listadoAlumnos'
})
export class ListadoAlumnosPipe implements PipeTransform {

  transform(alumnos: IAlumno[],): string {
    if(alumnos === undefined){
      return ""
    }
    else{
      let nombres: string[] = []
      alumnos.forEach(element => {
        nombres.push(element.nombre)
      }); 
      return nombres.join(" - ")
    }
  }

}
