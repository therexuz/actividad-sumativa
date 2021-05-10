import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import {FormBuilder,FormGroup} from '@angular/forms'
=======
import {  FormControl, FormGroup, Validators } from '@angular/forms';


>>>>>>> 73acf4502f25f149d565b5b70f78363c6aae5fe3
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

<<<<<<< HEAD
  
  constructor(private servicioNotas:NotasService) { }
=======
>>>>>>> 73acf4502f25f149d565b5b70f78363c6aae5fe3

  createFormGroup(){
    return new FormGroup({
      titulo:new FormControl('',[Validators.required, Validators.minLength(5)]),
      estado:new FormControl('',[Validators.required, Validators.minLength(5)]),
      texto:new FormControl('',[Validators.required ]),
    
    });
  }
  formulario:FormGroup;
 
  constructor(){
    this.formulario =this.createFormGroup();
  }
  ngOnInit(): void {
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
    this.servicioNotas.agregar
  }
}


