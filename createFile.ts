const encoder = new TextEncoder();

const greetings = encoder.encode("Deno test \nLooks cool!!!");

await Deno.writeFile("createFile.txt", greetings);
