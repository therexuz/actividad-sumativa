import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Notas} from '../interfaces/notas'
@Injectable({
  providedIn: 'root'
})
export class NotasService {
  servidor = "http://181.75.20.119:3000/";

  constructor(private servicio:HttpClient) { }

  consultar():Observable<any>{
    return this.servicio.get(`${this.servidor}`)
  }
  
  agregar(data:Notas){
    return this.servicio.post('http://181.75.20.119:3000/crear-nota',data).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  eliminar(){

  }

  editar(){

  }
}
