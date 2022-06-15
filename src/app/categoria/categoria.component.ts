import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from '../modelo/categoria';
import { CategoriaService } from 'src/app/servicios/modelo/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  titulo: string = 'Categoria';
  categoria: Categoria = new Categoria();

  constructor(private servicio : CategoriaService) { }

  ngOnInit(): void {}
  almacenarCategoria(): void {
      this.servicio.crearCategoria(this.categoria).subscribe(
        () => {
          Swal.fire(
            'Categoria Almacenada Satisfactoriamente',
            'La categoria se almaceno',
            'success'
          );
          }
      )
    }
}
