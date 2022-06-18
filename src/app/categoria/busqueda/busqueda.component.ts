import { Component, OnInit } from '@angular/core';
import { Categoria , CategoriaUpdate} from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/modelo/categoria';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  categoriaupdate: CategoriaUpdate = new CategoriaUpdate();
  listaDeCategorias: Categoria[] = [
    {
      idCategoria : 1,
      nombreCategoria : 'Servidor Cargando',
      descripcionCategoria: 'Espere..'
    }
  ];

  constructor(private servicio : CategoriaService) { }
  numero : number = 0;
  idCategoriaCategoria  : number = 0;


  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (Categorias) => this.listaDeCategorias = Categorias
    );
  }

  busqueda(categoria: Categoria ): void {
   
    this.servicio.buscarCategoria(categoria.idCategoria).subscribe(
      () => {
      var x = (this.listaDeCategorias.filter(x  => x.idCategoria == categoria.idCategoria));
    
      Swal.fire(
        'Encontrado!',
        `La categoría ${categoria.idCategoria} - ${x[0].nombreCategoria} se ha encontrado con la descripcion ${x[0].descripcionCategoria}`,
        'success'
      )
      }
    );
  }
  test(): void {
    console.log(this.listaDeCategorias)
  }

}
