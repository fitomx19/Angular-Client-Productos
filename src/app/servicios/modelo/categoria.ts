
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Categoria } from "src/app/modelo/categoria";


@Injectable({ 
    providedIn : 'root'
})
export class CategoriaService {
    private endPoint : string = 'http://localhost:8080/api/categoria';
    constructor (private http : HttpClient) {}
    private httpHeaders = new HttpHeaders({'ContentType':'application/json'})
    listadoCategorias(): Observable<Categoria[]>{
        return  this.http
        .get(this.endPoint)
        .pipe(map((response => response as Categoria[])));
    }

}
