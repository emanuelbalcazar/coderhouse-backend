import { Application } from "./deps.ts";
import router from "./routes.ts";
const PORT = 8080;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server escuchando en el puerto ${PORT}`);

await app.listen({ port: PORT });
