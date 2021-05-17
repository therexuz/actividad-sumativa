import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notas } from '../interfaces/notas';
@Injectable({
  providedIn: 'root',
})
export class NotasService {
  servidor = 'http://181.74.103.3:3000/';
  listaNotas: Array<Notas> = [];
  notaEditar: Notas = this.listaNotas[0];

  constructor(private servicio: HttpClient) {}

  consultar(): Observable<any> {
    this.listaNotas = [];
    return this.servicio.get(`${this.servidor}`);
  }

  agregar(data: Notas) {
    return this.servicio
      .post('http://181.74.103.3:3000/crear-nota', data)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  eliminar(data: Notas) {
    return this.servicio
      .post('http://181.74.103.3:3000/eliminar-nota', data)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  editar(data: Notas) {
    return this.servicio
      .post('http://181.74.103.3:3000/editar-nota', data)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  setId() {
    return this.listaNotas.length + 1;
  }
}
