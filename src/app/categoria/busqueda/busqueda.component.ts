import { Component, OnInit } from '@angular/core';
import { Categoria , CategoriaUpdate} from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/modelo/categoria';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  categoriaupdate: CategoriaUpdate = new CategoriaUpdate();
  listaDeCategorias: Categoria[] = [];
  constructor(private servicio : CategoriaService) { }
  numero : number = 0;
  idCategoriaCategoria  : number = 0;


  ngOnInit(): void {
    this.servicio.getCategorias().subscribe(
      (Categorias) => this.listaDeCategorias = Categorias
    );
  }

  busqueda(categoria: Categoria ): void {
    console.log(categoria)
    this.servicio.buscarCategoria(categoria.idCategoria).subscribe(
      (Categorias) => this.listaDeCategorias = Categorias
    );
    console.log(this.listaDeCategorias)
  }


}
