
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Producto,ProductoInsertar } from "src/app/modelo/producto";


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

      getProductos(): Observable<ProductoInsertar[]> {
        return this.http.get(this.endPoint).pipe(
          map(response => response as ProductoInsertar[])
        );
      }

  eliminarCategoria(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.endPoint}/${id}`, {headers: this.httpHeaders});
  }

  leerCategoria(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint}/${id}`);
  }

  crearProducto(a: ProductoInsertar): Observable<ProductoInsertar> {
    return this.http.post<ProductoInsertar>(this.endPoint, a, {headers: this.httpHeaders});
  }

  actualizarProducto(category: ProductoInsertar , id: number): Observable<ProductoInsertar> {
    return this.http.put<ProductoInsertar>(`${this.endPoint}/${id}`, category, {headers: this.httpHeaders});
  }

  buscarCategoria(term: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.endPoint}/${term}`).pipe(
      map(response => response as Producto[])
    );

    }
}
