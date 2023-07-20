import figlet from "figlet";
import { Elysia } from "elysia";
import { openai } from "./openai/completion";
import readline from "readline";

const app = new Elysia();

app.get("/", () => "Hello Elysia!");

app.get("/hello", async () => {
  const tui = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(figlet.textSync("Hello, Summar.ai!"), "\n");

  tui.prompt();

  tui.on("line", async (input) => {
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
      })
      .then((res) => {
        console.log(res.data.choices[0].message?.content);
        tui.prompt();
      })
      .catch((e: any) => {
        console.log(e);
      });
  });
});

app.listen(3000, () => {
  console.log(
    figlet.textSync("Summar.ai!"),
    "\n",
    "Server is running on port 3000"
  );
});
