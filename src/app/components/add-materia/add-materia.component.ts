import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMateria } from 'src/app/models/materia';
import { MateriaDataService } from 'src/app/services/materia-data.service';

@Component({
  selector: 'co-add-materia',
  templateUrl: './add-materia.component.html',
  styleUrls: ['./add-materia.component.css']
})
export class AddMateriaComponent implements OnInit {

  materia: IMateria = new IMateria()

  localListMateria!: IMateria[]

  constructor(private materiaService: MateriaDataService) { }

  onAdd(event: NgForm){
    if(event.valid){
      let nuevaMateria: IMateria = event.value as IMateria;
      if(this.materiaService.validateMateria(nuevaMateria)){
        if(nuevaMateria.limiteAlumnos > 0){
          this.materiaService.add(nuevaMateria);
          this.localListMateria = this.materiaService.list();
          event.resetForm();
          alert("materia agregada")
        }
        else{
          alert("Debe tener cupos mayores a 0")
        }
      }
      else{
        alert("Esta materia ya existe")
      }
    }
    else{
      alert("algo salio mal")
    }
  }

  ngOnInit(): void {
    this.localListMateria = this.materiaService.list();
  }

}
