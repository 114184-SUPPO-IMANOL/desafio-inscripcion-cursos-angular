import { Component, OnInit } from '@angular/core';
import { IMateria } from 'src/app/models/materia';
import { MateriaDataService } from 'src/app/services/materia-data.service';

@Component({
  selector: 'co-list-materia-alumno',
  templateUrl: './list-materia-alumno.component.html',
  styleUrls: ['./list-materia-alumno.component.css']
})
export class ListMateriaAlumnoComponent implements OnInit {

  localListMateria: IMateria[] = []

  constructor(private dataService: MateriaDataService) { }

  ngOnInit(): void {
    this.localListMateria = this.dataService.list();
  }

}
