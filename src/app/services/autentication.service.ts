import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() { }

  indice: number = 0;

  public goAddMateria(){
    this.indice = 1;
  }
  public goAddAlumno(){
    this.indice = 2;
  }
  public goListMateriaAlumno(){
    this.indice = 3;
  }
}
