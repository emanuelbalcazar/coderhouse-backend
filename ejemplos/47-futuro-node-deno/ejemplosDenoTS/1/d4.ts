const encoder = new TextEncoder();
const data = encoder.encode('Hello Deno!');
await Deno.writeFile('test.txt', data);
