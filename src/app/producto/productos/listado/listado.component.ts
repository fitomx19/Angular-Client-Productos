import { Component, OnInit } from '@angular/core';
import { Producto,ProductoInsertar } from 'src/app/modelo/producto';
import { ProductosService } from 'src/app/servicios/modelo/productos';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoProductosComponent implements OnInit {
  titulo: string = 'Listado de productos';
  identificador : number  = 0;
  listaProductos: Producto[]= [
    {
      idCategoria : [
       { idCategoria : 5}
      ],
      idProducto : 1,
      descripcionProducto: 'Espere..fdsfds',
      existencia : 2,
      nombreProducto: "adolfo",
      precioProducto: 20
    }
   
   
  ];

  listaProductosInsertar: ProductoInsertar[] = [];
  productos: Producto = new Producto();
  productosInsert: ProductoInsertar = new ProductoInsertar();

  constructor(private servicio : ProductosService) { }
  numero : number = 0;
  idProductoProducto  : number = 0;

  ngOnInit(): void {
  
    this.servicio.getCategorias().subscribe(
      (Productos) => this.listaProductos = Productos
    );
    
   
  }

  eliminar(producto: Producto): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la categoría ${producto.nombreProducto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarCategoria(producto.idProducto).subscribe(
          () => {
            this.listaProductos = this.listaProductos.filter(c => c !== producto)
            Swal.fire(
              'Eliminado!',
              `El producto ${producto.nombreProducto} ha sido eliminada con éxito.`,
              'success'
            )
          }
        );
      }
    })
  }


  actualizar(producto: Producto): void {
    console.log(producto)
    console.log(this.idProductoProducto)
    this.servicio.actualizarProducto(producto,this.idProductoProducto).subscribe(
      () => {
        console.log(producto)
        console.log(this.idProductoProducto)
        Swal.fire(
          'Producto Almacenado Satisfactoriamente',
          'El producto se Actualizo',
          'success'
        );
        }
    )
    }

    AsignarId(id: number):void{
     this.idProductoProducto =  id;
    }
    
   
   

}



//updateData(data: any, id: string): Observable<any> {
 // return this.http.patch(`${this.baseURL}/update/${id}`, data)
//}