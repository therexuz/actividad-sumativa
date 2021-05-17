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
  

  constructor(
    public servicioNotas: NotasService,
    private router: Router,
  
    
    ){}
    
  editar(id:number){
    this.router.navigate([`/editar-nota/${id}`])
  }
  ngOnInit(): void {
    this.servicioNotas.consultar().subscribe((datos) => {
      for (let i = 0; i < datos.length; i++) {
        this.servicioNotas.listaNotas.push(datos[i]);
      }
    });

  }
}
