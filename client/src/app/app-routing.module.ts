import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PacienteListComponent} from './components/paciente-list/paciente-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paciente',
    pathMatch: 'full'
  },
  {
    path: 'paciente',
    component: PacienteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
