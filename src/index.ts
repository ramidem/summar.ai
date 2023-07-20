import figlet from "figlet";
import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia!")
  .listen(3000, () => {
    console.log(
      figlet.textSync("Summa.ai!"),
      "\n",
      "Server is running on port 3000"
    );
  });
