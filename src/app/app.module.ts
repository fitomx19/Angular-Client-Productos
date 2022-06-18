import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ProductoComponent } from './producto/producto.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { BusquedaComponent } from './categoria/busqueda/busqueda.component';
import { ProductosComponent } from './producto/productos/productos.component';
import {ListadoProductosComponent} from './producto/productos/listado/listado.component';
import { BusquedaproductosComponent } from './producto/productos/busquedaproductos/busquedaproductos.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriaComponent,
    BienvenidoComponent,
    ProductoComponent,
    ListadoComponent,
    ListadoProductosComponent,
    BusquedaComponent,
    ProductosComponent,
    BusquedaproductosComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
