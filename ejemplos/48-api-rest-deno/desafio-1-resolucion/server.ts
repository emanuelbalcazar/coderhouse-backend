import {expressive} from "./deps.ts";
import {
  obtenerProductos,
  agregarProducto
} from "./controladores/productos.ts";

const port = 8080;
const app = new expressive.App();
app.use(expressive.simpleLog());
// app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get("/api/productos", obtenerProductos);
app.post("/api/productos", agregarProducto);

const server = await app.listen(port);
console.log("app listening on port " + server.port);
