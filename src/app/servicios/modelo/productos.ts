
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Producto } from "src/app/modelo/producto";


@Injectable({ 
    providedIn : 'root'
})
export class ProductosService {
    private endPoint : string = 'https://mighty-fjord-48440.herokuapp.com/api/producto';
    constructor (private http : HttpClient) {}
    private httpHeaders = new HttpHeaders({'ContentType':'application/json'})
    listadoCategorias(): Observable<Producto[]>{
        return  this.http
        .get(this.endPoint)
        .pipe(map((response => response as Producto[])));
    }

    getCategorias(): Observable<Producto[]> {
        return this.http.get(this.endPoint).pipe(
          map(response => response as Producto[])
        );
      }

  eliminarCategoria(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.endPoint}/${id}`, {headers: this.httpHeaders});
  }

  leerCategoria(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint}/${id}`);
  }

  crearCategoria(category: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.endPoint, category, {headers: this.httpHeaders});
  }

  actualizarCategoria(category: Producto , id: number): Observable<Producto> {
    return this.http.put<Producto>(`${this.endPoint}/${id}`, category, {headers: this.httpHeaders});
  }

  buscarCategoria(term: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.endPoint}/${term}`).pipe(
      map(response => response as Producto[])
    );

    }
}
