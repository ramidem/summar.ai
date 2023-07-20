import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello, Bun!");
  },
});

console.log(figlet.textSync("Summa.ai!"), "\n", `Listening on ${server.port}!`);
