import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  modelo = '/Usuario';
  apiUrl = 'http://localhost:1337';

  constructor(private _http: HttpClient) {  }

  obtenerUno(id: number) {
    return this._http.get(this.apiUrl + this.modelo + `/${id}`);
  }

  query(consulta: string) {
    return this._http.get(this.apiUrl + this.modelo + '?' + consulta);
  }

  crear(modelo) {
    return this._http.post(this.apiUrl + this.modelo, modelo);
  }

  editar(id: number, modelo) {
    return this._http.put(this.apiUrl + this.modelo + `/${id}`, modelo);
  }

  eliminar(id: number) {
    return this._http.delete(this.apiUrl + this.modelo + `/${id}`);
  }
  obtenerTodos() {
    return this._http.get(this.apiUrl + this.modelo );
  }

}
