export class Producto {
    idProducto : number = 0;
    descripcionProducto : string = '';
    existencia : number = 0;
    nombreProducto : string = '';
    precioProducto : number = 0;
    idCategoria : idCategoria[] = [];
}

interface idCategoria {
    idCategoria: number;
  }



export class ProductoInsertar { 
    idProducto : number = 0;
    descripcionProducto : string = '';
    existencia : number = 0;
    nombreProducto : string = '';
    precioProducto : number = 0;
}