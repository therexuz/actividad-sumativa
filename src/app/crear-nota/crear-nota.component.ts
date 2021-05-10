import { Component, OnInit } from '@angular/core';

import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  constructor(private servicioNotas:NotasService) { }
  formulario:FormGroup;
  createFormGroup(){
    return new FormGroup({
      titulo:new FormControl('',[Validators.required, Validators.minLength(5)]),
      estado:new FormControl('',[Validators.required, Validators.minLength(5)]),
      texto:new FormControl('',[Validators.required ]),
    
    });
    
  }
  
  ngOnInit(): void {
    this.formulario =this.createFormGroup();
  }
  
  ValidarDatos(){
    if(!this.formulario.valid){
      alert("Complete el Formulario");
      return;
    }
    if(this.formulario.value.genero==""){
      alert("Debe elegir un genero");
      return;
    }
    
  }

  crearNota(){
    this.servicioNotas.agregar()
  }
}


