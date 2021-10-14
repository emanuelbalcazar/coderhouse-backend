import type { Producto } from "../types/producto.ts";

const productos:Producto[] = []

//Fake Db Queries
export const findProductoById = (id: number): Producto => {
  let producto:Producto = <Producto>productos.find((producto:Producto) => producto.id == id)
  return producto || {}
}

export const findProductos = (): Producto[] => {
  return productos
}

export const createProducto = (
  nombre: string,
  descripcion: string,
  precio: number
): Producto => {
    let producto:Producto = {
      id : productos.length? (productos[productos.length-1].id + 1) : 1,
      nombre,
      descripcion,
      precio
    }
    productos.push(producto)
    return producto
};

export const updateProducto = (
  id : number,
  nombre: string,
  descripcion: string,
  precio: number
): Producto => {
    let productoActualizar:Producto = {id,nombre,descripcion,precio}
    let index = productos.findIndex((producto:Producto) => producto.id == id)
    //console.log(productoActualizar, index)
    productos.splice(index,1,productoActualizar)
    return productoActualizar
};

export const deleteProducto = (
  id : number
): Producto => {
    let index = productos.findIndex((producto:Producto) => producto.id == id)
    let producto:Producto = productos.splice(index,1)[0]
    return producto
};
