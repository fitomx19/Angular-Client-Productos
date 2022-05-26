import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ProductoComponent } from './producto/producto.component';
const routes: Routes = [

    {path:'categorias',component:CategoriaComponent},
    {path:'listado',component:ListadoComponent},
    {path:'productos',component:ProductoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
