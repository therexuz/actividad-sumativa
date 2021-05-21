import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl,FormBuilder, FormControlName} from '@angular/forms'
import {NotasService} from '../servicios/notas.service'
import {Notas} from '../interfaces/notas'
import { Router } from '@angular/router';
@Component({
  selector: 'app-crear-nota',
  templateUrl: './crear-nota.component.html',
  styleUrls: ['./crear-nota.component.scss']
})
export class CrearNotaComponent implements OnInit {
  
  formulario:FormGroup;
  
  constructor(
    public fb:FormBuilder,
    public servicio:NotasService, 
    private router: Router
    ) { 
    
    this.formulario=fb.group({
      titulo: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      texto: new FormControl('',[Validators.required,Validators.maxLength(150)])
    })
    
  }
  
  ngOnInit(): void {

  }

  onSubmit(){

    const notas:Notas={
      id:this.servicio.setId(),
      titulo:this.formulario.controls['titulo'].value,
      estado:this.formulario.controls['estado'].value,
      texto:this.formulario.controls['texto'].value
    };

    if(!this.formulario.valid){
      alert("Rellene correctamente todos los campos")
      return
    }
    
    this.servicio.agregar(notas);
    this.servicio.consultar()
    this.router.navigate([`/mis-notas`]).then(()=>{
      window.location.reload();
    })
  }
  numberOfCharacters1 = 0;
  onKeyUp(event: any): void {
    this.numberOfCharacters1 = event.target.value.length;
    if (this.numberOfCharacters1 > 150) {
      event.target.value = event.target.value.slice(0, 150);
      this.numberOfCharacters1 = 150;
    }
  }
}
  