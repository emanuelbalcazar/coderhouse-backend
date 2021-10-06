/** ES Modules */
import { serve } from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 3000;

/** Create Server */
const server = serve({
    port: PORT
});

console.log("http://localhost:" + PORT);
for await (const req of server) {
    req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html",
        }),
        body: "<h2>Hola seguidores de Coderhouse!!!</h2>" 
    });
}