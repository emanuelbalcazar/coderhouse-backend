import { Router } from "../../deps.ts";
import {
  createProducto,
  deleteProducto,
  findProducto,
  findProductoById,
  updateProducto,
} from "../handlers/producto.ts";

export const router = new Router()
  //Producto routes
  .get("/api/productos", findProducto)
  .get("/api/productos/:productoId", findProductoById)
  .delete("/api/productos/:productoId", deleteProducto)
  .put("/api/productos/:productoId", updateProducto)
  .post("/api/productos", createProducto);
