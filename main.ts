import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "I asked my agent to roast itself; it filed a ticket, assigned it to itself, and closed it as done.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
