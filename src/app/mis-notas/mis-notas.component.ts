import { Component, OnInit } from '@angular/core';
import { NotasService } from '../servicios/notas.service';
import { Notas } from '../interfaces/notas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.scss'],
})
export class MisNotasComponent implements OnInit {
  listaNotas: Array<Notas> = [];

  constructor(
    private servicioNotas: NotasService,
    private router: Router,
    
    ){}
  editar(item:Notas){
    this.router.navigate([`/editar-nota`])
  }
  ngOnInit(): void {
    this.servicioNotas.consultar().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.listaNotas.push(datos[i]);
      }
    });

  }
}
