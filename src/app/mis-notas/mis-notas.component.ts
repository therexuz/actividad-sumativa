import { Component, OnInit } from '@angular/core';
import { NotasService } from '../servicios/notas.service';
import { Notas } from '../interfaces/notas';
@Component({
  selector: 'app-mis-notas',
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.scss'],
})
export class MisNotasComponent implements OnInit {
  listaNotas: Array<Notas> = [];

  constructor(private servicioNotas: NotasService) {}

  ngOnInit(): void {
    this.servicioNotas.consultar().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.listaNotas.push(datos[i]);
      }
    });

  }
}
