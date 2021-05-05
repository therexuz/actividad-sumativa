import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { EditarNOtaComponent } from './editar-nota/editar-nota.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';

const routes: Routes = [
  {path:'crear-nota',component:CrearNotaComponent},
  {path:'editar-nota',component:EditarNOtaComponent},
  {path:'mis-notas',component:MisNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
