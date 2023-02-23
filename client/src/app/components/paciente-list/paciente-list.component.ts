import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service'

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit{

  pacientes: any;
  constructor(private pacientesService: PacientesService){
   PacientesService
  }

  ngOnInit(): void {
      this.pacientesService.getPacientes().subscribe(
        res => {
          this.pacientes = res;
          console.log(res)
        },
        err => console.log(err)
      )
  }
}
