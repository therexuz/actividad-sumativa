import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl,FormBuilder, FormControlName} from '@angular/forms'
import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import { normalizeSeparators } from '@angular/compiler-cli/src/ngtsc/file_system/src/util';
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {
  
  formulario:FormGroup;
  
  constructor(public fb:FormBuilder,public servicio:NotasService) { 
    this.formulario=fb.group({
      titulo: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      texto: new FormControl('',[Validators.required])
    })
  
  }
  
  ngOnInit(): void {

  }

  onSubmit(){

    const notas:Notas={
      titulo:this.formulario.controls['titulo'].value,
      estado:this.formulario.controls['estado'].value,
      texto:this.formulario.controls['texto'].value
    };

    if(!this.formulario.valid){
      alert("Rellene todos los campos")
      return
    }
    console.log(notas.titulo);
    console.log(notas.estado);
    console.log(notas.texto);
    
    this.servicio.agregar(notas);
  }

}
