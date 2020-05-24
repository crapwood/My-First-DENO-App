import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 3000;
const app = new Application();

console.log(`Server running on port ${port}`);
await app.listen({ port });
