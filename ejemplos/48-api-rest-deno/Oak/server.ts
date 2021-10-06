import { Application } from "./deps.ts";

const app = new Application();

app.use(ctx => {
  ctx.response.body = 'Hola Mundo!';
});

console.log('Servidor Oak escuchando en el puerto 8080');

await app.listen({ port: 8080 });