import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/modelo/categoria';
 
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = 'Listado';
  listaDeCategorias : Categoria[] = [

    {
      idCategoria : 1,
      nombreCategoria : 'yo1',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 2,
      nombreCategoria : 'yo2',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 3,
      nombreCategoria : 'yo3',
      descripcionCategoria: 'ya'
  
    },
    {
      idCategoria : 4,
      nombreCategoria : 'yo4',
      descripcionCategoria: 'ya'
  
    }
  ];

 
  constructor(private servicio: CategoriaService) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias()
    .subscribe((Categorias)=>this.listaDeCategorias=Categorias)
  };

}
