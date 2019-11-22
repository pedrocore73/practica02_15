import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAsistentesComponent } from './listado-asistentes/listado-asistentes.component';


const routes: Routes = [
  {path: '', component: ListadoAsistentesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
