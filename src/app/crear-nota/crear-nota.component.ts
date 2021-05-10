import { Component, OnInit } from '@angular/core';
import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import {FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  
  constructor(private servicioNotas:NotasService) { }

  ngOnInit(): void {
  }

  crearNota(){
    this.servicioNotas.agregar
  }
}
