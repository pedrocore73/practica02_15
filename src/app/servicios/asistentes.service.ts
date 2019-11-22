import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  asistentes = [
    {nombre: 'Juan', apellidos: 'Pérez Fernández', email: 'juan@juan.com', empresa: 'Telefónica'},
    {nombre: 'Lucía', apellidos: 'Gómez Fernández', email: 'lucia@lucia.com', empresa: 'Gas Natural'},
    {nombre: 'Pedro', apellidos: 'Pérez Fernández', email: 'pedro@pedro.com', empresa: 'JazzTel'},
    {nombre: 'María', apellidos: 'Gómez Fernández', email: 'maria@maria.com', empresa: 'Orange'},
    {nombre: 'Alfonso', apellidos: 'Pérez García', email: 'alfonso@alfonso.com', empresa: 'Telefónica'}
  ];

  constructor() { }

  getAsistentes() {
    return this.asistentes;
  }
}
