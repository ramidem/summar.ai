const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello, Bun 🍞!");
  },
});

console.log(`listening on ${server.port}!`);
