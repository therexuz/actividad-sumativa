import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { NotasService } from '../servicios/notas.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss'],
})
export class EditarNOtaComponent implements OnInit {
  

  
  formulario: FormGroup;

  constructor(
    public fb: FormBuilder,
    public servicio: NotasService,
    private router: Router,
  )
  {
    this.formulario = fb.group({
      inputTitulo: new FormControl(this.servicio.notaEditar.titulo, [Validators.required]),
      inputEstado: new FormControl(this.servicio.notaEditar.estado, [Validators.required]),
      inputTexto: new FormControl(this.servicio.notaEditar.texto, [Validators.required,Validators.maxLength(150)]),
    });
  }

  ngOnInit(): void {
    console.log(this.servicio.notaEditar)
    if(this.servicio.notaEditar.estado == "Cerrado"){
      this.formulario.controls['inputTitulo'].disable();
      this.formulario.controls['inputEstado'].disable();
      this.formulario.controls['inputTexto'].disable();
    }
    
    
  }
  
  eliminar() {
    // this.servicio.eliminar(notas);
    this.servicio.eliminar(this.servicio.notaEditar);
    this.router.navigate([`/mis-notas`]).then(()=>{
      window.location.reload();
    });;
  }
  
  actualizar() {
    
    if (!this.formulario.valid) {
      alert('Rellene correctamente todos los campos');
      return;
    }
    
    this.servicio.notaEditar.titulo = this.formulario.controls['inputTitulo'].value;
    this.servicio.notaEditar.estado = this.formulario.controls['inputEstado'].value;
    this.servicio.notaEditar.texto = this.formulario.controls['inputTexto'].value;
    
    this.servicio.editar(this.servicio.notaEditar);
    this.router.navigate([`/mis-notas`]).then(()=>{
      window.location.reload();
    });
  }

  numberOfCharacters1 = 0;
  onKeyUp(event: any): void {
    const div = document.getElementById("charCounter");
    this.numberOfCharacters1 = event.target.value.length;

    if (this.numberOfCharacters1 > 150) {
      event.target.value = event.target.value.slice(0, 150);
      this.numberOfCharacters1 = 150;
    }
  }
}
