import { parse } from "https://deno.land/std@0.100.0/datetime/mod.ts"; // Url REMOTA!

const myDate = parse("04-07-2021", "dd-mm-yyyy");

console.log(myDate); // 2020-03-01T23:00:00.000Z

