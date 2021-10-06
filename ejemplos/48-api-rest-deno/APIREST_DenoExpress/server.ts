import { expressive } from "./deps.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controllers/products.ts";

const port = 8080;
const app = new expressive.App();
app.use(expressive.simpleLog());
// app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get("/api/products", getProducts);
app.get("/api/products/{id}", getProduct);
app.post("/api/products", addProduct);
app.put("/api/products/{id}", updateProduct);
app.delete("/api/products/{id}", deleteProduct);

const server = await app.listen(port);
console.log("app listening on port " + server.port);
