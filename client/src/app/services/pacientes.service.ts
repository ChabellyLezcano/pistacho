import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Paciente } from '../models/Paciente'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  API_URI = "http://localhost:3000/home/pacientes";
  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get(`${this.API_URI}`)
  }

  getPaciente(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  deletePaciente(id: string) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updatePaciente(id:string, updatePaciente:Paciente): Observable<Paciente> {
    return this.http.put(`${this.API_URI}/${id}`, updatePaciente);
  }

  savePaciente(paciente: Paciente) {
    return this.http.post(`${this.API_URI}`, paciente);
  }

  
}
