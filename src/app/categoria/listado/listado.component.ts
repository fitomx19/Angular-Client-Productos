import { Component, OnInit } from '@angular/core';
import { Categoria , CategoriaUpdate} from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/modelo/categoria';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listaDeCategorias: Categoria[]= [

    {
      idCategoria : 1,
      nombreCategoria : 'Servidor Cargando',
      descripcionCategoria: 'Espere..'
  
    }
   
   
  ];
  categoria: Categoria = new Categoria();
  categoriaupdate: CategoriaUpdate = new CategoriaUpdate();

  constructor(private servicio : CategoriaService) { }
  numero : number = 0;
  idCategoriaCategoria  : number = 0;

  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (Categorias) => this.listaDeCategorias = Categorias
    );
  }

  eliminar(categoria: Categoria): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la categoría ${categoria.nombreCategoria}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.servicio.eliminarCategoria(categoria.idCategoria).subscribe(
          () => {
            this.listaDeCategorias = this.listaDeCategorias.filter(c => c !== categoria)
            Swal.fire(
              'Eliminado!',
              `La categoría ${categoria.nombreCategoria} ha sido eliminada con éxito.`,
              'success'
            )
          }
        );
      }
    })
  }


  actualizar(categoria: Categoria): void {
    console.log(categoria)
    this.servicio.actualizarCategoria(categoria,this.idCategoriaCategoria).subscribe(
      () => {
        console.log(categoria)
        console.log(this.idCategoriaCategoria)
        Swal.fire(
          'Categoria Almacenada Satisfactoriamente',
          'La categoria se Actualizo',
          'success'
        );
        }
    )
    }

    AsignarId(id: number):void{
     this.idCategoriaCategoria =  id;
    }

}



//updateData(data: any, id: string): Observable<any> {
 // return this.http.patch(`${this.baseURL}/update/${id}`, data)
//}