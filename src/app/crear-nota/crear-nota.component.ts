import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {


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

}


