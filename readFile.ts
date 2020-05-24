let file = await Deno.open("createFile.txt");

const buffer = new Deno.Buffer();
const bytesCopied1 = await Deno.copy(file, Deno.stdout);
const bytesCopied2 = await Deno.copy(file, buffer);

console.log(bytesCopied1);
console.log(bytesCopied2);

Deno.close(file.rid);
