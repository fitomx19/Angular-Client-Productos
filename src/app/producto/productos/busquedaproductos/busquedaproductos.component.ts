import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { ProductosService } from 'src/app/servicios/modelo/productos';
@Component({
  selector: 'app-busquedaproductos',
  templateUrl: './busquedaproductos.component.html',
  styleUrls: ['./busquedaproductos.component.css']
})
export class BusquedaproductosComponent implements OnInit {

  productos: Producto = new Producto();

  listadodeProductos: Producto[] = [
   
  ];

  constructor(private servicio : ProductosService) { }
  numero : number = 0;
  idCategoriaCategoria  : number = 0;


  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (Producto) => this.listadodeProductos = Producto
    );
  }
  busqueda(producto: Producto ): void {
   
    this.servicio.buscarCategoria(producto.idProducto).subscribe(
      () => {
      var x = (this.listadodeProductos.filter(x  => x.idProducto == producto.idProducto));
    
      Swal.fire(
        'Encontrado!',
        `La categoría ${producto.idProducto} - ${x[0].idProducto} se ha encontrado con la descripcion ${x[0].descripcionProducto}`,
        'success'
      )
      }
    );
  }

}



