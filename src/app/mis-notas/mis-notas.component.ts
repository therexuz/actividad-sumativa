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
  constructor(public servicioNotas: NotasService, private router: Router) {}

  editar(id: number) {
    this.router.navigate([`/editar-nota/`]);
  }
  ngOnInit(): void {
   
    this.servicioNotas.consultar().subscribe((datos) => {  
      datos.notas.forEach((element: any) => {
        
        this.servicioNotas.listaNotas.push(element);
      });
    });
  }
}
