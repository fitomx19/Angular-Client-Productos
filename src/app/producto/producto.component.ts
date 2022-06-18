import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto, ProductoInsertar} from '../modelo/producto';
import { ProductosService } from 'src/app/servicios/modelo/productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  titulo: string = 'Producto';
  producto: Producto = new Producto();
  productoInsertar : ProductoInsertar = new ProductoInsertar();
  

  constructor(private servicio : ProductosService) { }

  ngOnInit(): void {}
  almacenarProducto(): void {
    console.log(this.productoInsertar)
      this.servicio.crearProducto(this.productoInsertar).subscribe(
        () => {
          Swal.fire(
            'Producto Almacenada Satisfactoriamente',
            'El producto se almaceno',
            'success'
          );
          }
      )
    }
}

