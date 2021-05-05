import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  servidor = "http://181.75.20.119:3000/";
  
  constructor(private servicio:HttpClient) { }

  consultar():Observable<any>{
    return this.servicio.get(`${this.servidor}`)
  }
}
