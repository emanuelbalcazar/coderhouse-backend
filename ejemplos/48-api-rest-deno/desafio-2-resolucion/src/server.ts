import { Application, config } from "../deps.ts";

import { router } from "./routes/index.ts";
import { logger } from "./middleware/logger.ts";

const { PORT } = config();
const app = new Application();

app.use(logger);
app.use(router.routes());

console.log(`Server up on port ${PORT}`);

await app.listen({ port: Number(PORT) });
