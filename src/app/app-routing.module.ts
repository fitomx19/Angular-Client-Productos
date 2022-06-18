import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import {ListadoProductosComponent} from './producto/productos/listado/listado.component'
import { ProductoComponent } from './producto/producto.component';
import { BusquedaComponent } from './categoria/busqueda/busqueda.component';
import { BusquedaproductosComponent } from './producto/productos/busquedaproductos/busquedaproductos.component';
const routes: Routes = [
    {path:'',component:BienvenidoComponent },
    {path:'categorias',component:CategoriaComponent},
    {path:'listado',component:ListadoComponent},
    {path:'listadoProductos',component:ListadoProductosComponent},
    {path:'productos',component:ProductoComponent},
    {path:'busqueda',component:BusquedaComponent},
    {path:'busquedaProductos',component:BusquedaproductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
