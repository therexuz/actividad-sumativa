import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl,FormBuilder, FormControlName} from '@angular/forms'
import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss']
})
export class EditarNOtaComponent implements OnInit {

  formulario:FormGroup;
  
  constructor(
    public fb:FormBuilder,
    public servicio:NotasService,
    private router: Router
    ) { 
    this.formulario=fb.group({
      titulo: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      texto: new FormControl('',[Validators.required])
    })
  
  }
  ngOnInit(): void {
  }
  eliminar(){
    this.servicio.eliminar();
    this.router.navigate([`/mis-notas`])
  }
  actualizar(){
    const notas:Notas={
      titulo:this.formulario.controls['titulo'].value,
      estado:this.formulario.controls['estado'].value,
      texto:this.formulario.controls['texto'].value
    };

    if(!this.formulario.valid){
      alert("Rellene todos los campos")
      return
    }
  
    this.servicio.editar(notas);
    this.router.navigate([`/mis-notas`])
    
  }

}
