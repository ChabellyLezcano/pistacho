import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';

import { PacientesService } from './services/pacientes.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PacienteFormComponent,
    PacienteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    PacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
