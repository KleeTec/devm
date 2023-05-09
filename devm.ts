import * as Cmd from "./modules/cmd/mod.ts";
const args = Cmd.parse(Deno.args) as Cmd.Args;
console.log(args);
