import { Component, OnInit } from '@angular/core';
import { AsistentesService } from '../servicios/asistentes.service';

@Component({
  selector: 'app-listado-asistentes',
  templateUrl: './listado-asistentes.component.html',
  styleUrls: ['./listado-asistentes.component.css']
})
export class ListadoAsistentesComponent implements OnInit {

  asistentes: any;

  constructor(private asistentesServices: AsistentesService) { }

  ngOnInit() {
    this.asistentes = this.asistentesServices.getAsistentes();
    console.log(this.asistentes);
  }

  imprimirTabla() {
    document.title = 'listado_asistentes';
    window.print();
  }

}
