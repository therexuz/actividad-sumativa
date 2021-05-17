import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
  FormControlName,
} from '@angular/forms';
import { NotasService } from '../servicios/notas.service';
import { Notas } from '../interfaces/notas';
import { Router } from '@angular/router';

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
    
  ) {
    this.formulario = fb.group({
      inputTitulo: new FormControl(this.servicio.notaEditar.titulo, [Validators.required]),
      inputEstado: new FormControl(this.servicio.notaEditar.estado, [Validators.required]),
      inputTexto: new FormControl(this.servicio.notaEditar.texto, [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log(this.servicio.notaEditar)
  }
  eliminar() {
    // this.servicio.eliminar(notas);
    this.router.navigate([`/mis-notas`]);
  }
  actualizar() {
    if (!this.formulario.valid) {
      alert('Rellene todos los campos');
      return;
    }

    //this.servicio.editar(notas);
    this.router.navigate([`/mis-notas`]);
  }
}
