import { IAlumno } from "./alumno";

export class IMateria {
    nombre!: string;
    limiteAlumnos!: number;
    alumnos: IAlumno[] = [];

    public isAvailable(): boolean{
        return this.alumnos.length >= this.limiteAlumnos
    }

    public addAlumno(alumno: IAlumno){
        this.alumnos.push(alumno);
    }
}