import { Producto } from "../types/types.ts";
let productos: Producto[] = [];

// @desc Get Products
// @route Get /api/products
const obtenerProductos = async (request: any, response: any) => {
  await response.json(productos);
};

// @desc Add product
// @route Post /api/products
const agregarProducto = async (request: any, response: any) => {
  //   console.log(await request.data);
  if (!request.data) {
    response.status = 400;
    response.json({
      error: true,
      message: "No data",
    });
  } else {
    const producto: Producto = await request.data;
    producto.id = productos.length? (productos[productos.length-1].id+1) : 1;
    productos.push(producto);
    response.json(producto);
  }
};


export { obtenerProductos, agregarProducto };