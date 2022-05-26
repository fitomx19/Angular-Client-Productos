import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from '../modelo/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  titulo: string = 'Categoria';
  categoria: Categoria = new Categoria();

  constructor() {}

  ngOnInit(): void {}

  almacenarCategoria(): void {
    Swal.fire(
      'Categoria Almacenada Satisfactoriamente',
      'La categoria se almaceno',
      'success'
    );
  }
}
