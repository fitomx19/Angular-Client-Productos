import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ProductoComponent } from './producto/producto.component';
import { BusquedaComponent } from './categoria/busqueda/busqueda.component';
const routes: Routes = [
    {path:'',component:BienvenidoComponent },
    {path:'categorias',component:CategoriaComponent},
    {path:'listado',component:ListadoComponent},
    {path:'productos',component:ProductoComponent},
    {path:'busqueda',component:BusquedaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
