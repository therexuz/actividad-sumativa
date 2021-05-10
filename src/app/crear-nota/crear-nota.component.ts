import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import{ NotasService } from '../servicios/notas.service';

@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      titulo:new FormControl('',[Validators.required ]),
      estado:new FormControl('',[Validators.required]),
      texto:new FormControl('',[Validators.required ]),
    
    });
  }
  formulario:FormGroup;
  constructor(private servicioNotas:NotasService){
    this.formulario =this.createFormGroup();
  }
  ngOnInit(): void {
  }

  validarDatos(){
  if(!this.formulario.valid){
    alert("Complete el Formulario");
    return false;
  }
  return true;
}
  onSubmit(){
    console.log("caca")
    if(this.validarDatos()){
      
    }
  }
}
